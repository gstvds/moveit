import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ThemeProvider } from '../contexts/ThemeContext';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ChallengesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default MyApp
