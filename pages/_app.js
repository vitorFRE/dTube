import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import ColorModeProvider, {
  ColorModeContext,
} from '../src/components/Helper/ColorMode';

const theme = {
  light: {
    BackgroundColor: '#F1F6FA',
    textColorBase: '#222',
    textColorBase2: '#666666',
    textColorBase3: '#522ba7',
    corLogo: '#522ba7',
  },
  dark: {
    BackgroundColor: '#180d39',
    BackgroundColor2: '#231254',
    textColorBase: '#F1F6FA',
    textColorBase2: '#9497A1',
    textColorBase3: '#F1F6FA',
    corLogo: '#522ba7',
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={'light'}>
      {props.children}
    </ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
