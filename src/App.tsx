import Creations from "./Elements/Creations";
import Footer from "./Elements/Footer";
import Header from "./Elements/Header";
import MobileMenu from "./Elements/MobileMenu";
import Sections from "./Elements/Sections";

const App = () => {
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
