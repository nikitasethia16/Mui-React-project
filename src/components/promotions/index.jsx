import { useEffect, useState } from "react";
import { PromotionContainer, PromotionMessageText } from "../../styles/promotion";
import { Box, Slide } from "@mui/material";

const messages=[
    "Bag the Style! 👜 ",
    " 20% Off on All Bags ",
    "Limited Time Only!"
]

const Promotion=()=>{
    const [messageIndex, setMessageIndex]=useState(0)
    const [show, setShow]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
setShow(false)
        },3000)
       const intervalId= setInterval(() => {
       setMessageIndex(i=>(i+1)% messages.length)
       setShow(true)
       setTimeout(()=>{
        setShow(false)
                },3000)
    
}, 4000);
return()=>{
    clearInterval(intervalId)
}
    },[])
return(
    <PromotionContainer>
        <Slide direction={show?"left":"right"} in={show} timeout={{enter:500, exit:100}}>
    <Box display="flex" alignItems="ccenter" justifyContent="center">
<PromotionMessageText>
    {messages[messageIndex]}
</PromotionMessageText>

    </Box>
    </Slide>
    </PromotionContainer>
)
}

export default Promotion;