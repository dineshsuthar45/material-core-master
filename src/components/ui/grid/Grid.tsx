import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@mui/material';
import { ColDef, ColGroupDef, IFilterOptionDef, SideBarDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import 'ag-grid-community/styles/agGridAlpineFont.css';
import 'ag-grid-enterprise';
import { GridProps } from './Grid.types';
import './gridCommon.scss';
import './gridDark.scss';
import './gridLight.scss';

import { LicenseManager } from 'ag-grid-enterprise';
import classNames from 'classnames';
import { ISimpleFilterModelType } from 'ag-grid-community/dist/lib/filter/provided/simpleFilter';
import {
	blankFilter,
	defaultDateFilterOptions,
	defaultMultiFilters,
	defaultNumberFilterOptions,
	defaultTextFilterOptions,
	notBlankFilter,
} from './constants';

/**
 * Further properties can be found in AG-Grid website at https://www.ag-grid.com/react-data-grid/
 */

export const MGrid = <T extends any>({
	defaultColDef = { floatingFilter: true, sortable: true },
	skipInferNumberColumn = false,
	skipMaxTwoLineHeaderText = false,
	rowSelection = 'single',
	size = 'comfy',
	sideBar = {
		hiddenByDefault: false,
		position: 'right',
		toolPanels: [
			{
				id: 'columns',
				labelDefault: 'Columns',
				labelKey: 'columns',
				iconKey: 'columns',
				toolPanel: 'agColumnsToolPanel',
				minWidth: 225,
				maxWidth: 225,
				width: 225,
				toolPanelParams: {
					suppressPivots: true,
					suppressPivotMode: true,
				},
			},
		],
	},
	...props
}: GridProps<T>) => {
	const theme = useTheme();
	const gridRef = useRef<AgGridReact<T>>(null);
	const [themeMode, setThemeMode] = useState<'light' | 'dark'>(theme?.palette?.mode ?? 'light');
	const [rowData, setRowData] = useState<T[]>(props.rowData ?? []);
	const [columns, setColumns] = useState<(ColDef | ColGroupDef)[]>();
	const [defaultColumns, setDefaultColumns] = useState<ColDef>();

	const sideBarVisible =
		typeof sideBar === 'undefined'
			? false
			: sideBar === null
			? false
			: typeof sideBar === 'string'
			? sideBar.replace(/\s/g, '') !== ''
			: typeof sideBar === 'boolean'
			? sideBar
			: Array.isArray(sideBar)
			? sideBar.some((x) => x.replace(/\s/g, '') !== '')
			: typeof sideBar === 'object'
			? !(sideBar as SideBarDef).hiddenByDefault
			: false;

	useEffect(() => {
		setThemeMode(theme.palette.mode);
	}, [theme.palette.mode]);

	useEffect(() => {
		if (props.loadFromURL) {
			fetch(props.loadFromURL)
				.then((result) => result.json())
				.then((rowData) => setRowData(rowData));
		}
	}, [props.loadFromURL]);

	useEffect(() => {
		const isApiRefDefined = (gridRef: React.RefObject<AgGridReact<T>>) =>
			gridRef && gridRef.current && gridRef.current.api;
		const isColDef = (col: ColDef<T> | ColGroupDef<T>): col is ColDef<T> => 'field' in col || 'type' in col;

		const tranform = (columnDef: ColDef<T> | ColGroupDef<T>): ColDef<T> | ColGroupDef<T> => {
			if (isColDef(columnDef)) {
				const colDef = columnDef as ColDef<T>;
				const defaultMaxHeaderHeightCellClass = !skipMaxTwoLineHeaderText ? 'm-header-cell-text-default' : '';

				switch (typeof colDef.headerClass) {
					case 'string':
						colDef.headerClass += ` ${defaultMaxHeaderHeightCellClass}`;
						colDef.headerTooltip =
							!colDef.headerTooltip && colDef.headerName ? colDef.headerName : colDef.headerTooltip ?? colDef.field;
						break;
					case 'object':
						if (Array.isArray(colDef.headerClass)) {
							colDef.headerClass.concat(defaultMaxHeaderHeightCellClass);
							colDef.headerTooltip =
								!colDef.headerTooltip && colDef.headerName ? colDef.headerName : colDef.headerTooltip ?? colDef.field;
						}
						break;
					case 'function':
						break;
					default:
						colDef.headerClass = defaultMaxHeaderHeightCellClass;
						colDef.headerTooltip =
							!colDef.headerTooltip && colDef.headerName ? colDef.headerName : colDef.headerTooltip ?? colDef.field;
						break;
				}

				const getFilterParams = (filter: any, filterParams: any) => {
					const filterOptions = filterParams?.filterOptions as (IFilterOptionDef | ISimpleFilterModelType)[];

					if (filterOptions) {
						const indexNotBlank = filterOptions.findIndex((option) => option === 'notBlank');
						const indexBlank = filterOptions.findIndex((option) => option === 'blank');
						if (indexNotBlank > 0) filterParams.filterOptions[indexNotBlank] = notBlankFilter;
						if (indexBlank > 0) filterParams.filterOptions[indexBlank] = blankFilter;
					} else
						switch (filter) {
							// use default filter options for filter types which can contain 'blank'/'notBlank' filter
							case 'agNumberColumnFilter':
								return {
									...filterParams,
									filterOptions: defaultNumberFilterOptions,
								};
							case 'agTextColumnFilter':
								return {
									...filterParams,
									filterOptions: defaultTextFilterOptions,
								};
							case 'agDateColumnFilter':
								return {
									...filterParams,
									filterOptions: defaultDateFilterOptions,
								};
						}
					return filterParams;
				};
				const setMultiFilterParams = () => {
					const filterParams = colDef.filterParams;
					if (filterParams && filterParams.filters) {
						colDef.filterParams.filters?.forEach((value: any) => {
							value.filterParams = getFilterParams(value.filter, value.filterParams);
						});
					} else
						colDef.filterParams = {
							...filterParams,
							filters: defaultMultiFilters,
						};
				};

				if (colDef.filter)
					colDef.filter === 'agMultiColumnFilter'
						? setMultiFilterParams()
						: (colDef.filterParams = getFilterParams(colDef.filter, colDef.filterParams));

				return {
					...colDef,
					type:
						!skipInferNumberColumn && rowData.every((row) => typeof row[colDef.field as keyof typeof row] === 'number')
							? 'numericColumn'
							: colDef.type,
				};
			} else {
				const colGroupDef = columnDef as ColGroupDef<T>;
				const children = colGroupDef.children.map((child) => {
					return tranform(child);
				});

				const emptyHeaderClass = !colGroupDef.headerName ? 'ag-header-group-cell-with-group-empty' : '';

				switch (typeof colGroupDef.headerClass) {
					case 'string':
						colGroupDef.headerClass += ` ${emptyHeaderClass}`;
						break;
					case 'object':
						if (Array.isArray(colGroupDef.headerClass)) {
							colGroupDef.headerClass.concat(emptyHeaderClass);
						}
						break;
					case 'function':
						break;
					default:
						colGroupDef.headerClass = emptyHeaderClass;
						break;
				}

				return {
					...colGroupDef,
					children,
				};
			}
		};

		const newColumns = (isApiRefDefined(gridRef) ? gridRef.current?.api.getColumnDefs() : props.columnDefs) ?? [];
		newColumns.forEach((newColumn) => {
			Object.assign(newColumn, tranform(newColumn));
		});

		if (isApiRefDefined(gridRef)) {
			gridRef.current?.api.setColumnDefs(newColumns);
		}
		setColumns(newColumns);
	}, [rowData, props.columnDefs, gridRef, skipInferNumberColumn, skipMaxTwoLineHeaderText]);

	useEffect(() => {
		const newDefaultColumns = { ...defaultColDef };
		newDefaultColumns.autoHeaderHeight = skipMaxTwoLineHeaderText ? newDefaultColumns.autoHeaderHeight : true;
		newDefaultColumns.wrapHeaderText = skipMaxTwoLineHeaderText ? newDefaultColumns.wrapHeaderText : true;

		setDefaultColumns(newDefaultColumns);
	}, [defaultColDef, skipMaxTwoLineHeaderText]);

	useEffect(() => {
		gridRef?.current?.api?.resetRowHeights();
	}, [size]);
	const handleChangeRowHeight = () => (size === 'compact' ? 20 : 26);

	return (
		<div
			className={classNames(`m-grid ag-theme-balham ag-theme-material ag-theme-material-${themeMode} ${size}`, {
				'side-bar-visible': sideBarVisible,
			})}
			style={{ width: '100%', height: '100%' }}
		>
			<AgGridReact<T>
				ref={gridRef}
				rowData={rowData}
				defaultColDef={defaultColumns}
				columnDefs={columns}
				rowSelection={rowSelection}
				sideBar={sideBar}
				getRowHeight={handleChangeRowHeight}
				{...props}
			/>
		</div>
	);
};

MGrid.defaultProps = {
	defaultColDef: { floatingFilter: true, sortable: true },
	skipInferNumberColumn: false,
	skipMaxTwoLineHeaderText: false,
	rowSelection: 'single',
	sideBar: {
		hiddenByDefault: false,
		position: 'right',
		toolPanels: [
			{
				id: 'columns',
				labelDefault: 'Columns',
				labelKey: 'columns',
				iconKey: 'columns',
				toolPanel: 'agColumnsToolPanel',
				minWidth: 225,
				maxWidth: 225,
				width: 225,
				toolPanelParams: {
					suppressPivots: true,
					suppressPivotMode: true,
				},
			},
		],
	},
};
