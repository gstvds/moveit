import { ThemeProvider } from '../contexts/ThemeContext';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
