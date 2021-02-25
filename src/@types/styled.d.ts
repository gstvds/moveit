/* eslint-disable camelcase */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light';

    colors: {
      white: string;
      background: string;
      gray_line: string;
      text: string;
      text_highlight: string;
      title: string;
      red: string;
      green: string;
      blue: string;
      blue_dark: string;
      blue_twitter: string;
      blue_title: string;
    }
  }
}