import { createTheme, PaletteMode } from "@mui/material";
import { primaryColor, secondaryColor } from "./palette";

const typography = {
  fontFamily: ["GmarketSansMedium"].join(","),
};

export const getTheme = () =>
  createTheme({
    typography,
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: "blue",
      },
    },
  });

export default getTheme;
