import { Divider, List, ListItem } from '@material-ui/core';
import styled from 'styled-components';

import { getColor, my } from '@/styles/theme';

import RouteLinks from './route-links';
import SettingsLinks from './settings-links';

const StyledList = styled(List)`
  width: 304px;
` as typeof List;
export const StyledListItem = styled(ListItem)`
  width: 304px;
  height: 48px;

  &&.Mui-selected {
    background-color: ${getColor('white')};

    .MuiListItemText-root {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.71;
      letter-spacing: 0.1px;
      color: ${getColor('ultramarineBlue')};
    }

    svg {
      color: ${getColor('ultramarineBlue')};
    }
  }
` as typeof ListItem;
const StyledDivider = styled(Divider)`
  && {
    ${my(2)}
  }
`;

const Items = () => (
  <StyledList component="nav" aria-label="links">
    <RouteLinks />
    <StyledDivider />
    <SettingsLinks />
  </StyledList>
);

export default Items;
