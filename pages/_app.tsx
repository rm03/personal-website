import { Analytics } from '@vercel/analytics/react';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProps } from 'next/app'


config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
