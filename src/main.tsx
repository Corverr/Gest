import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './index.css'
import App from './App'

const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: 'Inter, system-ui, sans-serif',
  defaultRadius: 'md',
  colors: {
    lavender: [
      '#f8f7fc',
      '#f0edf8',
      '#e0dbf0',
      '#c9c0e6',
      '#b3a6db',
      '#a08ecf',
      '#8f7bc4',
      '#7a63b8',
      '#6a52a8',
      '#584090',
    ],
  },
  primaryShade: 5,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
)