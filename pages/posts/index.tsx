import { withApollo } from '../../lib/apollo';
import Posts from '../../components/Posts';
import { FC } from 'react';

const Posts2: FC = () => {
  return <Posts />;
};

export default withApollo({ ssr: true })(Posts2);
