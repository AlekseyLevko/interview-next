import { Fonts } from "../src/components/Fonts";
import "../styles/global.css";
import "../styles/reset.css";
import "../styles/tokens.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
