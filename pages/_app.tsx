import '../styles/globals.css'
import '../components/Card/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
