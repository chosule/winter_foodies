import { useMemo } from "react";
import { theme as getTheme } from "@/styles/theme";
import { Theme } from "@mui/material";

const useThemeMode = () => {
  const theme = useMemo(() => {
    return getTheme(mode) as Theme;
  }, []);

  return [theme] as const;
};

export default useThemeMode;
