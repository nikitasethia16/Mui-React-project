import './App.css'
import { Button, Container, ThemeProvider } from '@mui/material'
import theme from './styles/theme'
import Appbar from './components/appbar'

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='xl' >
      <Appbar/>
  <Button variant='contained'> Test </Button>
    </Container>
    </ThemeProvider>
  )
}

export default App
