import React from 'react';
import { withApollo } from '@/lib/apollo';
import CustomHead from '@/components/Head';
import BasicTest from '@/components/BasicTest';

const Home: React.FC = () => {
  return (
    <div className="container">
      <CustomHead />
      <main>
        <BasicTest />
      </main>
    </div>
  );
};

export default withApollo({ ssr: true })(Home);
