import { NextPage } from 'next';

import CustomLogin from '@/components/login';
import { LoginLayout } from '@/layouts';

const Login: NextPage = () => {
  return (
    <LoginLayout imageName={'billy.jpeg'}>
      <CustomLogin />
    </LoginLayout>
  );
};

export default Login;
