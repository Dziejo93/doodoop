import { ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { StyledListItem } from '@/components/sidebar/items';
import { getColor } from '@/styles/theme';

const styleIcon = (icon: typeof SvgIcon) =>
  styled(icon)`
    width: 18px;
    height: 18px;
    color: ${getColor('black')};
  ` as typeof SvgIcon;

const LogOutIcon = () => <img src={'/images/log-out.svg'} alt={'logOut'} />;

const dashboardLinks = [
  {
    label: 'Settings',
    to: '/settings',
    Icon: styleIcon(Settings),
  },
  {
    label: 'Logout',
    to: '/log-out',
    Icon: styleIcon(LogOutIcon),
  },
];

const SettingsLinks = () => {
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

export default SettingsLinks;
