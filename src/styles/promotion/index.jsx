import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";
import '@fontsource/montez'

export const PromotionContainer=styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    padding:'40px 0px 40px 0px',
    background:Colors.secondary,
    [theme.breakpoints.down('md ')]:{
        padding:'20px 0px 20px 0px',
    }

}))

export const PromotionMessageText=styled(Typography)(({theme})=>({
    fontFamily:'"Montez","cursive"',
    fontSize:"3rem",
    color:Colors.white,
    [theme.breakpoints.down('md')]:{
        fontSize:"1.5rem",
    }
}))

