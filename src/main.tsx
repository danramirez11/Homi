import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from'react-router-dom'
import routes from './Routes/Navigation.tsx'
import { GlobalStyle } from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
    <GlobalStyle />
    <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
)
