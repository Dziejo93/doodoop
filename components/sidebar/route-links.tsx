import { ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core';
import { Dashboard, Flag } from '@material-ui/icons';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { StyledListItem } from '@/components/sidebar/items';
import { getColor } from '@/styles/theme';

const styleIcon = (icon: typeof SvgIcon) => styled(icon)`
  width: 18px;
  height: 18px;
  color: ${getColor('black')};
`;

const dashboardLinks = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    Icon: styleIcon(Dashboard),
  },
  {
    label: 'Product update',
    to: '/update',
    Icon: styleIcon(Flag),
  },
];

const RouteLinks = () => {
  const { route, push } = useRouter();

  return (
    <>
      {dashboardLinks.map(({ label, to, Icon }, linkIndex) => (
        <StyledListItem button selected={route === to} key={linkIndex} onClick={() => push(to)}>
          <ListItemIcon>
            <Icon titleAccess={label} />
          </ListItemIcon>
          <ListItemText primary={label} />
        </StyledListItem>
      ))}
    </>
  );
};

export default RouteLinks;
