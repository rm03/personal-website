import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
      <><Navbar/><Component {...pageProps} /></>
  )
}

export default MyApp
