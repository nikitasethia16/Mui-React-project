import React from 'react';
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
import { Divider, ListItemButton, ListItemIcon, styled } from "@mui/material"
import { ActionIconContainerDesktop, ActionIconContainerMobile, AppbarList } from '../styles/appbar';
import { Colors } from '../styles/theme';
const Actions=({matches})=>{
const Component= matches ? ActionIconContainerMobile : ActionIconContainerDesktop

    const CenteredListItemButton = styled(ListItemButton)(() => ({
        justifyContent: 'center',
      }));
      const CenteredListItemIcon = styled(ListItemIcon)(() => ({
        display:'flex',
        justifyContent: 'center',
        color:matches && Colors.secondary
      }));
      const ActionButton = ({ icon }) => (
        <CenteredListItemButton>
          <CenteredListItemIcon>{icon}</CenteredListItemIcon>
        </CenteredListItemButton>
      );
return(
    <Component>
        <AppbarList type="row">
      <ActionButton icon={<ShoppingCardIcon />} />
      <Divider orientation="vertical" flexItem/>
      <ActionButton icon={<FavoriteIcon />} />
      <Divider orientation="vertical" flexItem/>
      <ActionButton icon={<PersonIcon />} />
      <Divider orientation="vertical" flexItem/>
      </AppbarList>
    </Component>
)
}
export default Actions