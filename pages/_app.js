import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col space-y-12 bg-gray-50">
      <Header />
      <div className="flex-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
