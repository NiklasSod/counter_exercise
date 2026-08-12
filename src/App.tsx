import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Header from './components/Header'
import CounterApp from './components/CounterApp'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CounterApp />
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default App
