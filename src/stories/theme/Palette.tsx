import { Box, Typography } from '@mui/material';

interface PaletteProps {
	/**
	 * Text
	 */
	text: string;
}

/**
 * Primary UI component for user interaction
 */
export const Palette = ({ text }: PaletteProps) => {
	return (
		<Typography component="div" variant="body1">
			<Box sx={{ color: 'primary.main' }}>{text}</Box>
			<Box sx={{ color: 'secondary.main' }}>{text}</Box>
			<Box sx={{ color: 'error.main' }}>{text}</Box>
			<Box sx={{ color: 'warning.main' }}>{text}</Box>
			<Box sx={{ color: 'info.main' }}>{text}</Box>
			<Box sx={{ color: 'success.main' }}>{text}</Box>
			<Box sx={{ color: 'text.primary' }}>{text}</Box>
			<Box sx={{ color: 'text.secondary' }}>{text}</Box>
			<Box sx={{ color: 'text.disabled' }}>{text}</Box>
		</Typography>
	);
};
