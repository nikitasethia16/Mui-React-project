import { createTheme } from "@mui/material"
import { darken, lighten } from "polished";

    export const Colors={
    primary:"#5f2c3e",
    secondary:"#d1adcc",
    success:"#4CAF50",
    info:"#00a2ff",
    danger:"#FF5722",
    warning:"#FFC107",
    dark:"#0e1b20",
    light:"#aaa",
    mutes:"#abafa3",
    border:"#DDDFE1",
    inverse:"#2F3D4A",
    shaft:"#333",
    // Greys
    dim_grey:"#696969",
    dove_grey:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_grey:"rgb(230,230,230)",
    // Solid
    white:"#fff",
    black:"#000"

    }

    const theme = createTheme({
        palette:{
            primary:{
                main:Colors.primary,
            },
            secondary:{
                main:Colors.secondary,
            }
        },
        components:{
            MuiButton:{
                defaultProps:{
                    disableRipple:true,
                    disableElevation:true
                }
            },
            MyShopButton: {
                styleOverrides: {
                  root: {
                    color: Colors.white,
                  },
                  primary: {
                    background: Colors.primary,
                    "&:hover": {
                      background: lighten(0.05, Colors.primary),
                    },
                  },
                  secondary: {
                    background: `${Colors.secondary}`,
                    "&:hover": {
                      background: lighten(0.05, Colors.primary),
                    },
                  },
                },
              },
            },
    })

    export default theme