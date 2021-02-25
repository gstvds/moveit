import { ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider, DefaultTheme } from 'styled-components';
import light from '../themes/light';
import dark from '../themes/dark';
import { createContext } from 'react';

const themes = [light, dark];

type ThemeTitle = typeof themes[number]['title'];

interface ThemeContextData {
  theme: DefaultTheme;
  themes: DefaultTheme[];
  changeTheme(themeTitle: string): void;
}

const ThemeContext = createContext({} as ThemeContextData);

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(light);

  function changeTheme(themeTitle: ThemeTitle) {
    setCurrentTheme(themes.find(theme => theme.title === themeTitle));
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, themes, changeTheme }} >
      <StyledComponentsThemeProvider theme={currentTheme}>
      {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}