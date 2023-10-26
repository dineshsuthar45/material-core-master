import { Box, Grid } from '@mui/material';

interface PaletteBackgroundProps {
	/**
	 * Text
	 */
	text: string;
}

/**
 * Primary UI component for user interaction
 */
export const PaletteBackground = ({ text }: PaletteBackgroundProps) => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box
					sx={{
						bgcolor: 'secondary.main',
						color: 'secondary.contrastText',
						p: 2,
					}}
				>
					{text}
				</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'error.main', color: 'error.contrastText', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'info.main', color: 'info.contrastText', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'success.main', color: 'success.contrastText', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'text.primary', color: 'background.paper', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'text.secondary', color: 'background.paper', p: 2 }}>{text}</Box>
			</Grid>
			<Grid item xs={12} sm={4}>
				<Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>{text}</Box>
			</Grid>
		</Grid>
	);
};
