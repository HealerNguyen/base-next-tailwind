import '../styles/global.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
