import { NextPageWithLayout } from "@/types/commons";
import { Global, ThemeProvider as StyledThemeProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React, { FC } from "react";
import { globalStyle } from "@/styles/global";
import { getTheme } from "./../styles/theme";
import ModalProvider from "@/context/ModalProvider";
import { WinterFoodApiProvider } from "@/context/hooks/useDataContextApi";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GeoLocationProvider from "@/context/GeoLocationProvider";
import { RecoilRoot } from "recoil";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const theme = getTheme();
  // const queryClient = new QueryClient();
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <>
      <Script>
        <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></script>
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Global styles={globalStyle} />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <WinterFoodApiProvider>
              <GeoLocationProvider>
                <ModalProvider>
                  <ThemeProvider theme={theme}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeProvider>
                </ModalProvider>
                <ReactQueryDevtools initialIsOpen={false} />
              </GeoLocationProvider>
            </WinterFoodApiProvider>
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
