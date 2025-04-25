import { useTheme } from "@emotion/react"
import { Typography, useMediaQuery } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import bannerImage from '/src/assets/banner_image.webp';

const Banner=()=>{
const theme = useTheme()
const matches= useMediaQuery(theme.breakpoints.down('md'))
return(
    <BannerContainer>
        <BannerImage src={bannerImage}/>
        <BannerContent>
            <Typography variant="h6">Hudge Collection</Typography>
            <BannerTitle variant="h2">New Bags</BannerTitle>
             <BannerDescription variant="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic incidunt eveniet dolor libero .</BannerDescription>
            <BannerShopButton color="primary">Shop now</BannerShopButton>
            
        </BannerContent>

    </BannerContainer>
)

}

export default Banner