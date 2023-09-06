import { createTheme, PaletteMode } from "@mui/material";
import { primaryColor, secondaryColor } from "./palette";

export const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
  });
