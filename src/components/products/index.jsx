import { useTheme } from "@emotion/react"
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material"
import { products } from "../../data"
import SingleProduct from "./SingleProduct"
import SingleProductDesktop from "./SingleProductDesktop"

const Products=()=>{
    const theme = useTheme()
    const matches= useMediaQuery(theme.breakpoints.down('md'))
    const renderProducts = products.map((product) => (
        <Grid size={{ xs:12, md:4,sm:6 }} key={product.id} display="flex" flexDirection="column" alignItems="center">
        {matches ? <SingleProduct product={product} matches={matches} />: <SingleProductDesktop product={product} matches={matches} />}  
        </Grid>
      ));
return(
    <>
    <Box textAlign='center' mt={2}>
        <Typography variant="h4">Our Products</Typography>
    </Box>
    <Container>
        <Grid container spacing={{xs:2, md:3}} justifyContent='center' sx={{margin:"20px 4px 10px 4px"}}>
            {renderProducts}
        </Grid>
    </Container>
    </>
)
}
export default Products