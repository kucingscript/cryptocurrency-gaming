import { useEffect } from "react";
import { Navbar, Home, BuySell, Blogs, Footer, ScrollTop, Design } from "./components";

import ScrollReveal from "scrollreveal";

const App = () => {
  useEffect(() => {
    const registerAnimation = () => {
      const sr = ScrollReveal({
        origin: "bottom", distance: "90px", duration: 2000, reset: false
      });
      sr.reveal(
        `nav,#home,#buysell-1,#buysell-2,buysell-3,#blogs`, {opacity: 0, interval: 200}
      );
    }
    registerAnimation()
  }, []);

  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);

  return (
    <>
      <ScrollTop />
      <Navbar />
      <Home />
      <Design />
      <BuySell />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
