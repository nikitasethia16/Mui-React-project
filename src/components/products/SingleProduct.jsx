import { Stack } from "@mui/material"
import { ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductBox, ProductFavButton, ProductImage } from "../../styles/product"
import ProductMeta from "./ProductMeta"
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { useState } from "react"

const SingleProduct=({product, matches})=>{
    const [isFav,setIsFav]= useState(false)

    const handleClick=()=>{
        setIsFav(true)
    }
return(
    <>
    <ProductBox>
        <ProductImage src={product.image}/> 
        <ProductMeta product={product} matches={matches}/>

<ProductActionWrapper>
    <Stack direction="row">
        <ProductFavButton onClick={handleClick} isFav={isFav} >
            <FavoriteIcon/>
            </ProductFavButton>
            <ProductActionButton>
                <ShareIcon color='primary'/>
            </ProductActionButton>
            <ProductActionButton>
                <FitScreenIcon color='primary'/>
            </ProductActionButton>
    </Stack>
</ProductActionWrapper>
    </ProductBox>
        <ProductAddToCart variant="contained"> Add To Cart </ProductAddToCart> 
        </>
)
}
export default SingleProduct