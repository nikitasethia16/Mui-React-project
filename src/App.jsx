import './App.css'
import { Button, Container, ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import Appbar from './components/appbar'
import Banner from './components/banner'
import Promotion from './components/promotions'

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='xl' >
      <Appbar/>
      <Banner/>
      <Promotion/>
    </Container>
    </ThemeProvider>
  )
}

export default App
