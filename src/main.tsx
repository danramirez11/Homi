import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from'react-router-dom'
import routes from './Routes/Navigation.tsx'
import { GlobalStyle } from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={{}}>
    <GlobalStyle />
    <RouterProvider router={routes} />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
