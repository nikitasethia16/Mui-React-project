import { IconButton } from "@mui/material"
import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "../Actions"

const AppbarMobile=({matches})=>{
return(
     <AppbarContainer>
        <IconButton>
            <MenuIcon/>
        </IconButton>
            <AppbarHeader textAlign='center' variant='h4'>My Bag</AppbarHeader>
            
            <IconButton>
            <SearchIcon/>
        </IconButton>
                <Actions matches={matches}/>
             
        </AppbarContainer>
)
}

export default AppbarMobile