import { createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useEffect } from 'react';
import { ThemeProvider as StyleComponentsThemeProvider } from 'styled-components';

import styledComponentsTheme from '@/styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const materialTheme = createMuiTheme();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Doodoop</title>
      </Head>
      <StyleComponentsThemeProvider theme={styledComponentsTheme}>
        <MaterialThemeProvider theme={materialTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </MaterialThemeProvider>
      </StyleComponentsThemeProvider>
    </>
  );
};

export default MyApp;
