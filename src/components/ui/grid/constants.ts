import { IFilterOptionDef, IMultiFilterDef } from "ag-grid-community";
import { ISimpleFilterModelType } from "ag-grid-community/dist/lib/filter/provided/simpleFilter";

export const blankFilter: IFilterOptionDef = {
	displayKey: 'Blank',
	displayName: 'Blank',
	predicate: (_: any, cellValue: any) => !cellValue,
	numberOfInputs: 0
};

export const notBlankFilter: IFilterOptionDef = {
	displayKey: 'Not Blank',
	displayName: 'Not Blank',
	predicate: (_: any, cellValue: any) => !!cellValue,
	numberOfInputs: 0
};

const defaultBlanksFilterOptions = [blankFilter, notBlankFilter];

export const defaultTextFilterOptions : (IFilterOptionDef | ISimpleFilterModelType)[]= [
	'contains',
	'notContains',
	'equals',
	'notEqual',
	'startsWith',
	'endsWith',
	...defaultBlanksFilterOptions
];

export const defaultNumberFilterOptions: (IFilterOptionDef | ISimpleFilterModelType)[] = [
	'equals',
	'notEqual',
	'lessThan',
	'lessThanOrEqual',
	'greaterThan',
	'greaterThanOrEqual',
	'inRange',
	...defaultBlanksFilterOptions
];

export const defaultDateFilterOptions: (IFilterOptionDef | ISimpleFilterModelType)[] = [
	'equals',
	'greaterThan',
	'lessThan',
	'notEqual',
	'inRange',
	...defaultBlanksFilterOptions
];

export const defaultMultiFilters: IMultiFilterDef[] = [
    {
        filter: 'agTextColumnFilter',
        filterParams: {
            filterOptions: defaultTextFilterOptions,
        },
    },
    { filter: 'agSetColumnFilter' },
];