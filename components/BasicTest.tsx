import { useQuery } from '@apollo/react-hooks';
import getUsers from '@/lib/apollo/query/getUsers.graphql';

const BasicTest: React.FC = () => {
  const { loading, error, data } = useQuery(getUsers, {
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <div>loading</div>;
  else if (error) return <div>Error</div>;
  const {
    users: {
      all: { edges },
    },
  } = data;
  // @todo change this monstrosity
  return (
    <>
      {edges.map((edge: any) => (
        <div key={edge.node.id}>{edge.node.email}</div>
      ))}
    </>
  );
};

export default BasicTest;
