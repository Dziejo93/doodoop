import styled from 'styled-components';

import UserAvatar from '@/components/sidebar/user-avatar';
import { getColor, mb, mt, px } from '@/styles/theme';

import Items from './items';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 304px;
  height: 100vh;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12),
    0 16px 24px 2px rgba(0, 0, 0, 0.14);
  background-color: ${getColor('white')};
`;
const VitaminsLogo = styled.img`
  height: 54px;
  width: 274px;
  ${mt(2)}
  ${mb(5)}
  ${px(2)}
`;

const CustomDrawer = () => (
  <Sidebar>
    <VitaminsLogo src={'/images/logo.svg'} alt={'logo'} />
    <Items />
    <UserAvatar />
  </Sidebar>
);

export default CustomDrawer;
