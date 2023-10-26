import { Typography as MuiTypography } from "@mui/material";

interface TypographyProps {
  /**
   * Text
   */
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const Typography = ({ text }: TypographyProps) => {
  return (
    <>
      <MuiTypography variant="h1" component="div" gutterBottom>
        h1. {text}
      </MuiTypography>
      <MuiTypography variant="h2" gutterBottom component="div">
        h2. {text}
      </MuiTypography>
      <MuiTypography variant="h3" gutterBottom component="div">
        h3. {text}
      </MuiTypography>
      <MuiTypography variant="h4" gutterBottom component="div">
        h4. {text}
      </MuiTypography>
      <MuiTypography variant="h5" gutterBottom component="div">
        h5. {text}
      </MuiTypography>
      <MuiTypography variant="h6" gutterBottom component="div">
        h6. {text}
      </MuiTypography>
      <MuiTypography variant="subtitle1" gutterBottom component="div">
        subtitle1. {text}
      </MuiTypography>
      <MuiTypography variant="subtitle2" gutterBottom component="div">
        subtitle2. {text}
      </MuiTypography>
      <MuiTypography variant="body1" gutterBottom>
        body1. {text}
      </MuiTypography>
      <MuiTypography variant="body2" gutterBottom>
        body2. {text}
      </MuiTypography>
      <MuiTypography variant="button" display="block" gutterBottom>
        button. {text}
      </MuiTypography>
      <MuiTypography variant="caption" display="block" gutterBottom>
        caption. {text}
      </MuiTypography>
      <MuiTypography variant="overline" display="block" gutterBottom>
        overline. {text}
      </MuiTypography>
    </>
  );
};
