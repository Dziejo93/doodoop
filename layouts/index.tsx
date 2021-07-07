import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export { default as LoginLayout } from './login';
export { default as DashBoardLayout } from './dashboard';

type LayoutProps = {
  children: ReactNode;
};

const LayoutContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
const MainContainer = styled.main`
  display: flex;
`;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <MainContainer>{children}</MainContainer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
