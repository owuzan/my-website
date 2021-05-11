import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="oguzhandev.us.auth0.com"
      clientId="6i1hsMoc9eY2jf14bmepWCrFapqujBCM"
      redirectUri={process.env.NEXT_PUBLIC_ORIGIN}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col space-y-12 bg-gray-50 dark:bg-black transition">
        <Header />
        <div className="flex-auto">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default MyApp;
