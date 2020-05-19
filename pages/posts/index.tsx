import { withApollo } from '../../lib/apollo';
import Posts from '../../components/Posts';

const Posts2 = () => {
  return <Posts />;
};

export default withApollo({ ssr: true })(Posts2);
