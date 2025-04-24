import { ListItemText, ListItemIcon, ListItemButton } from "@mui/material"
import { AppbarContainer, AppbarHeader, AppbarList } from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "../Actions"


const AppbarDesktop=({matches})=>{
return(
    <>
    <AppbarContainer>
        <AppbarHeader>My Bag</AppbarHeader>
        <AppbarList type="row">
            <ListItemText primary="Home"/>
            <ListItemText primary="Categories"/>
            <ListItemText primary="Products"/>
            <ListItemText primary="Contact us"/>
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon/>
                </ListItemIcon>
            </ListItemButton>
        </AppbarList>
            <Actions matches={matches}/>
    </AppbarContainer>
    </>
)
}

export default AppbarDesktop