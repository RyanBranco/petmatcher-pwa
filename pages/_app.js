import "../styles/globals.css"
import MetaData from "../Components/Misc/MetaData"
// import DesktopNav from "../Components/Nav/DesktopNav"
// import MobileNav from "../Components/Nav/MobileNav"

function PetmatcherApp({ Component, pageProps }) {
  return (
    <>
    <MetaData />
    {/* <DesktopNav />
    <MobileNav /> */}
    <Component {...pageProps} />
    </>
  )
}

export default PetmatcherApp
