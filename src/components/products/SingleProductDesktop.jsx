import { Stack } from "@mui/material"
import { ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductBox, ProductFavButton, ProductImage } from "../../styles/product"
import ProductMeta from "./ProductMeta"
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { useState } from "react"

const SingleProductDesktop=({product, matches})=>{
    const [showOption,setShowOption]=useState(false)
    const [isFav,setIsFav]= useState(false)
    
    const handleClick=()=>{
        setIsFav(true)
    }
    const handleMouseEnter=()=>{
        setShowOption(true)
    }
    const handleMouseLeave=()=>{
        setShowOption(false)
    }
return(
    <>
    <ProductBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} /> 
        <ProductFavButton onClick={handleClick} isFav={isFav}>
            <FavoriteIcon />
            </ProductFavButton>
            {
              showOption && <ProductAddToCart variant="contained" show={showOption}> Add To Cart </ProductAddToCart> 
            }

<ProductActionWrapper show={showOption}>
    <Stack direction="column">
            <ProductActionButton>
                <ShareIcon color='primary'/>
            </ProductActionButton>
            <ProductActionButton>
                <FitScreenIcon color='primary'/>
            </ProductActionButton>
    </Stack>
</ProductActionWrapper>
    </ProductBox>
        <ProductMeta product={product} matches={matches}/>
        
        </>
)
}
export default SingleProductDesktop