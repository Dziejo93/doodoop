import Head from 'next/head';
import { FC, ReactElement, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};
const CustomHead: FC<Props> = ({ children }): ReactElement => (
  <Head>
    <title>Doodoop</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    {children}
  </Head>
);

export default CustomHead;
