import DefaultLayout from "@/components/layouts/Default";
import { NextPageWithLayout } from "@/types/commons";
import { Global, ThemeProvider as StyledThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { FC } from "react";
import { globalStyle } from "@/styles/global";
import { theme } from "@/styles/theme";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <ThemeProvider value={ThemeProviderValue}>
//       <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
//     </ThemeProvider>
//   );
// };

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Script></Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Global styles={globalStyle} />
      {/* <ThemeModeProvider> */}
      {getLayout(<Component {...pageProps} />)}
      {/* </ThemeModeProvider> */}
    </>
  );
};

export default MyApp;
