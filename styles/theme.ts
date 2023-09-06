import { createTheme } from "@mui/material";
import { primaryColor, secondaryColor } from "./palette";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});
