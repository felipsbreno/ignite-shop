import { AppProps } from 'next/app';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';

import logoImg from '../assets/logo.svg';

globalStyles();

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Image src={logoImg} alt="imagem da logo" />
        </Header>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
