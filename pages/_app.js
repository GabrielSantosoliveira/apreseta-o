import HeaderComponent from "../src/components/Header/Header"
import "../src/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (

    <>
    <HeaderComponent/>
      <Component {...pageProps} />

    </>
  )
  
}

export default MyApp
