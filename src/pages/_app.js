import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navigation/Navbar";
import { NavProvider } from "@/context/NavContext";
import { Provider } from 'react-redux';
import store from "@/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <NavProvider>
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
        </NavProvider>
      </Provider>
    </>
  )

    ;
}
