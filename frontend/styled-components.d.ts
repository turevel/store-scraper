import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      accentPrimary: string;
      accentSecondary: string;
      accentTertiary: string;
    }
  }
}
