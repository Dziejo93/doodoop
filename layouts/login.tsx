import { Grid, GridProps, Paper } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
  imageName: string;
};

/* $ Transient props are a new pattern to pass props that are explicitly
consumed only by styled components and are not meant to be passed down
to deeper component layers. Here's how you use them:
https://stackoverflow.com/questions/57586654/styled-component-attrs-react-does-not-recognize-prop
*/

interface ImageProps extends GridProps {
  $imageName: string;
}

const LoginGrid = styled(Grid)`
  height: 100vh;
` as typeof Grid;

const MainGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
` as typeof Grid;

const SideImage = styled(Grid)<ImageProps>`
  background-image: ${({ $imageName }) => `url(/${$imageName})`};
  background-size: cover;
  background-position: center;
`;

const Login: FC<LayoutProps> = ({ children, imageName }) => {
  return (
    <>
      <LoginGrid container component="main">
        <MainGrid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
          {children}
        </MainGrid>
        <SideImage $imageName={imageName} item xs={false} sm={6} md={6} />
      </LoginGrid>
    </>
  );
};

export default Login;
