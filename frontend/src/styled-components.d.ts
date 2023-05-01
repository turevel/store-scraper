import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accentPrimary: string,
      accentSecondary: string,
      accentTertiary: string,
      background: string,
      primary: string,
      secondary: string,
      tertiary: string,
      quaternary: string,
      font: string,
      fontLight: string,
      fontDark: string
    }
  }
}
