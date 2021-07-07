import { NextPage } from 'next';

import BasicTest from '@/components/BasicTest';
import Layout from '@/layouts';
import { withApollo } from '@/lib/apollo';

const Home: NextPage = () => {
  return (
    <Layout>
      <BasicTest />
    </Layout>
  );
};

export default withApollo()(Home);
