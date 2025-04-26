import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import { Facebook, Instagram, Twitter, Send } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        p: { xs: 4, md: 5 },
        color: Colors.white,
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ lg: 4, md: 6 }}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            asperiores aliquam delectus ipsum tenetur necessitatibus ratione
            sit, adipisci cupiditate recusandae?
          </Typography>
          <Box color={Colors.dove_grey} mt={4}>
            <Facebook sx={{ mr: 1 }}></Facebook>
            <Twitter sx={{ mr: 1 }}></Twitter>
            <Instagram></Instagram>
          </Box>
        </Grid>
        <Grid size={{ lg: 2, md: 6 }}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
                About Us
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
                Order Tracking
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
                Privacy policy
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
               Terms & Condition
            </Typography>
          </ListItemText>
          
          </List>
        </Grid>

        <Grid size={{ lg: 2, md: 6 }}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          <List>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
                Login
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
                My Cart
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
                My Account
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography lineHeight={2} variant="caption2">
               Wishlist
            </Typography>
          </ListItemText>
          
          </List>
        </Grid>
        <Grid size={{ lg: 4, md: 6 }}>
          <FooterTitle variant="body1">News Letter</FooterTitle>
          <List>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<Send sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
          
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
