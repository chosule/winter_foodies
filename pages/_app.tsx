import DefaultLayout from "@/components/layouts/Default";
import { NextPageWithLayout } from "@/types/commons";
import { Global, ThemeProvider as StyledThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { FC } from "react";
import { globalStyle } from "@/styles/global";
import { getTheme } from "./../styles/theme";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  // const getLayout =
  //   Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  const getLayout = Component.getLayout ?? ((page) => page);
  const theme = getTheme();

  return (
    <>
      <Script>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
