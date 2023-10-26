import { DateRangePickerProps, Range, RangeKeyDict } from 'react-date-range';

export interface DateRangeProps extends Omit<DateRangePickerProps, 'locale'> {
	/**
	 * Date range label
	 */
	label: string;
	/**
	 * Tooltip title. If not provided, it will default to label
	 * @default ''
	 * @fallback label property
	 */
	tooltipTitle?: string;
	/**
	 * Callback fired when the state is changed.
	 *
	 * @param {RangeKeyDict} rangesByKey The selection `key`.
	 */
	onChange: (rangesByKey: RangeKeyDict) => void;
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/** Locale to use for calendar.
	 * @default 'enGB'
	 */
	locale?:
		| 'af'
		| 'ar'
		| 'arDZ'
		| 'arEG'
		| 'arMA'
		| 'arSA'
		| 'arTN'
		| 'az'
		| 'be'
		| 'beTarask'
		| 'bg'
		| 'bn'
		| 'bs'
		| 'ca'
		| 'cs'
		| 'cy'
		| 'da'
		| 'de'
		| 'deAT'
		| 'el'
		| 'enAU'
		| 'enCA'
		| 'enGB'
		| 'enIE'
		| 'enIN'
		| 'enNZ'
		| 'enUS'
		| 'enZA'
		| 'eo'
		| 'es'
		| 'et'
		| 'eu'
		| 'faIR'
		| 'fi'
		| 'fr'
		| 'frCA'
		| 'frCH'
		| 'fy'
		| 'gd'
		| 'gl'
		| 'gu'
		| 'he'
		| 'hi'
		| 'hr'
		| 'ht'
		| 'hu'
		| 'hy'
		| 'id'
		| 'is'
		| 'it'
		| 'itCH'
		| 'ja'
		| 'jaHira'
		| 'ka'
		| 'kk'
		| 'km'
		| 'kn'
		| 'ko'
		| 'lb'
		| 'lt'
		| 'lv'
		| 'mk'
		| 'mn'
		| 'ms'
		| 'mt'
		| 'nb'
		| 'nl'
		| 'nlBE'
		| 'nn'
		| 'oc'
		| 'pl'
		| 'pt'
		| 'ptBR'
		| 'ro'
		| 'ru'
		| 'sk'
		| 'sl'
		| 'sq'
		| 'sr'
		| 'srLatn'
		| 'sv'
		| 'ta'
		| 'te'
		| 'th'
		| 'tr'
		| 'ug'
		| 'uk'
		| 'uz'
		| 'uzCyrl'
		| 'vi'
		| 'zhCN'
		| 'zhHK'
		| 'zhTW';
	/**
	 * The short hint displayed in the `input` before the user enters a value.
	 * @default 'Select'
	 */
	placeholder?: string;
	/**
	 * Range selection.
	 * @example: {
	 * startDate: new Date(),
	 * endDate: new Date(),
	 * key: "selection",
	 * }
	 */
	range: Range;
	/**
	 *
	 */
	onMenuChange?: (isMenuOpen: boolean) => void;
}
