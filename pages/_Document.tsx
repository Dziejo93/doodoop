import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type InitialPropsWithStyles = { styles: JSX.Element; html: string; head?: (JSX.Element | null)[] };

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<InitialPropsWithStyles> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): ReturnType<typeof ctx.renderPage> =>
        originalRenderPage({
          enhanceApp: (App) => (props): JSX.Element => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
