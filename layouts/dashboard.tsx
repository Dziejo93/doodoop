import { Grid } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

import Drawer from '@/components/sidebar';

type Props = {
  children: ReactNode;
};
const DashboardGrid = styled(Grid)`
  height: 100vh;
` as typeof Grid;

const MainGrid = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
` as typeof Grid;

const Dashboard: FC<Props> = ({ children }) => {
  return (
    <>
      <DashboardGrid container component="main">
        <Drawer />
        <MainGrid item>{children}</MainGrid>
      </DashboardGrid>
    </>
  );
};

export default Dashboard;
