import { PaletteMode, PaletteOptions } from '@mui/material';
import { PaletteColorOptions } from '@mui/material/styles';
import { MColours } from './colours';

interface ExtendedPaletteOptions extends PaletteOptions {
	pending?: PaletteColorOptions;
	buy?: PaletteColorOptions;
	sell?: PaletteColorOptions;
	engaged?: PaletteColorOptions;
	inactive?: PaletteColorOptions;
}

const lightPalette: ExtendedPaletteOptions = {
	primary: {
		main: MColours.blue,
		light: MColours.lightBlue,
		dark: MColours.darkBlue,
	},
	secondary: {
		main: MColours.bayernBlue,
		light: MColours.bbBlue,
		dark: MColours.astrosBlue,
	},
	error: {
		main: MColours.red,
		light: MColours.lightRed,
		dark: MColours.darkRed,
	},
	warning: {
		main: MColours.orange,
		light: MColours.lightOrange,
		dark: MColours.darkOrange,
	},
	info: {
		main: MColours.blue,
		light: MColours.lightBlue,
		dark: MColours.darkBlue,
	},
	success: {
		main: MColours.green,
		light: MColours.lightGreen,
		dark: MColours.darkGreen,
	},
	engaged: {
		main: MColours.teal,
	},
	pending: {
		main: MColours.yellow,
	},
	buy: {
		main: MColours.lightGreen,
	},
	sell: {
		main: MColours.sellFuchsia,
	},

	inactive: {
		main: MColours.greyScale[400],
	},
};

const darkPalette: ExtendedPaletteOptions = {
	primary: {
		main: MColours.lightBlue,
		light: MColours.ALightBlue,
		dark: MColours.ADarkBlue,
	},
	secondary: {
		main: MColours.bayernBlue,
		light: MColours.bbBlue,
		dark: MColours.astrosBlue,
	},
	error: {
		main: MColours.red,
		light: MColours.lightRed,
		dark: MColours.darkRed,
	},
	warning: {
		main: MColours.orange,
		light: MColours.lightOrange,
		dark: MColours.darkOrange,
	},
	info: {
		main: MColours.AMainBlue,
		light: MColours.ALightBlue,
		dark: MColours.ADarkBlue,
	},
	success: {
		main: MColours.AGreen,
		light: MColours.lightGreen,
		dark: MColours.darkGreen,
	},
	background: {
		paper: 'black',
		default: 'black',
	},
	engaged: {
		main: MColours.teal,
	},

	pending: {
		main: MColours.yellow,
	},
	buy: {
		main: MColours.lightGreen,
	},
	sell: {
		main: MColours.sellFuchsia,
	},

	inactive: {
		main: MColours.greyScale[500],
	},
};

export const palette = (theme: PaletteMode): PaletteOptions => {
	const isLightMode = theme === 'light';

	return Object.freeze({
		mode: theme,
		...(isLightMode ? lightPalette : darkPalette),
	});
};
