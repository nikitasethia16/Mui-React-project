import { Box, Button, IconButton, styled } from "@mui/material";
import { Colors } from "../theme";
import { slideInBottom, slideInRight } from "../../animation";

export const ProductBox=styled(Box)(({theme})=>({
display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
[theme.breakpoints.up('md')]:{
    position:'relative'
}
 })) 
 
 export const ProductImage=styled('img')(({src,theme})=>({
    src:`url(${src})`,
    width:'100%',
    height:"400px",
    padding:'10px',
    background:Colors.light_grey,
    [theme.breakpoints.down('md')]:{
        width:'80%',
        padding:'24px'     
    },
}))

export const ProductActionButton=styled(IconButton)(()=>({
    background:Colors.white,
    margin:4    	  
}))

export const ProductFavButton=styled(ProductActionButton,{
    shouldForwardProp:(prop)=>prop !== 'isFav'
})(({isFav, theme})=>({
    color:isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')]:{
       position:'absolute',
       right:0,
       top:12     
    },
   
}))

export const ProductAddToCart=styled(Button,{
    shouldForwardProp:(prop)=>prop !== 'show'
})(({show, theme})=>({
   width:'120px',
   fontSize:'12px',
   background:Colors.secondary,
   opacity:0.9,
   [theme.breakpoints.up('md')]:{
    position:'absolute',
    bottom:'2%',
    width:'300px',
    padding:'10px 5px',
    animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`    
 },
}))

export const ProductMetaWrapper=styled(Box)(({theme})=>({
    padding:'4px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    
 }))

 export const ProductActionWrapper=styled(Box)(({show, theme})=>({
    [theme.breakpoints.up('md')]:{
        display:show? 'visible' : 'none' ,
        position: 'absolute',
        right:0,
        top:'15%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`
     },
 }))