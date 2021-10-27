import "../styles/styles.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavProvider from '../context/NavProvider'
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
