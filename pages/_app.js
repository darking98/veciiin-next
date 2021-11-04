import "../styles/styles.css";
//import Footer from "../components/Footer";
//import Navbar from "../components/Navbar";
import NavProvider from '../context/NavProvider'
import dynamic from 'next/dynamic'

const Footer = dynamic(
  () => import('../components/Footer'),
  { ssr: false }
)
const Navbar = dynamic(
  () => import('../components/Navbar'),
  { ssr: false }
)
function MyApp({ Component, pageProps }) {
  return (
    <NavProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NavProvider>
  );
}

export default MyApp;
