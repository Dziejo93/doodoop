import { Avatar, Grid } from '@material-ui/core';
import styled from 'styled-components';

import { getColor, getFontWeight, pl } from '@/styles/theme';

const UserAvatarWrapper = styled(Grid)`
  position: absolute;
  left: 0;
  bottom: 30px;
  align-self: flex-start;
  ${pl(1)}
` as typeof Grid;
const StyledAvatar = styled(Avatar)`
  && {
    width: 64px;
    height: 64px;
  }
`;
const TextGridWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${pl(1)}
` as typeof Grid;
const LoginTypography = styled.span`
  font-weight: ${getFontWeight('bold')};
  color: ${getColor('black')};
`;
const UserAvatar = () => (
  <UserAvatarWrapper container direction="row">
    <Grid item>
      <StyledAvatar alt={'avatar'} />
    </Grid>
    <TextGridWrapper>
      <LoginTypography>David</LoginTypography>
      <span>david@vitamins.nl</span>
    </TextGridWrapper>
  </UserAvatarWrapper>
);

export default UserAvatar;
