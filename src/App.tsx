import { useEffect } from "react";
import Creations from "./Elements/Creations";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import MobileMenu from "./Elements/MobileMenu";
import Sections from "./Elements/Sections";

const App = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main>
      <MobileMenu />
      <Header />
      <div className="px-5 py-40 flex flex-col justify-center w-screen items-center gap-[184px] md:px-6 md:py-12">
        <Sections />
        <Creations />
      </div>
      <Footer />
    </main>
  );
};

export default App;
