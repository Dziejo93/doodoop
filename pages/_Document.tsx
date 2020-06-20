import { ServerStyleSheets } from '@material-ui/core/styles';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import CustomHead from '@/components/Head';
import theme from '@/styles/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const materialSheets = new ServerStyleSheets();
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
      originalRenderPage({
        enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {styledComponentsSheet.getStyleElement()}
        </>
      ),
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <CustomHead>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </CustomHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
