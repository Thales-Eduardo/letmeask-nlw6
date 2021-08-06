import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary10: string;
      primary20: string;
      primary30: string;
      primary40: string;
      primary50: string;
      primary60: string;
      primary70: string;
      primary80: string;
      secundary: string;
      shadow: string;
      pink: string;
      red: string;
    };
  }
}
