const Header = () => {
  const handleOpen = () => {
    document.getElementById("mobileMenu")?.classList.toggle("-top-[100%]");
    document.getElementById("mobileMenu")?.classList.toggle("top-0");
  };

  return (
    <section className="h-[650px] md:h-screen w-screen relative text-white">
      <img
        src="./desktop/image-hero.jpg"
        alt="image hero"
        className="object-cover h-full w-screen absolute md:hidden"
      />
      <img
        src="./mobile/image-hero.jpg"
        alt="image hero"
        className="object-cover h-full w-screen absolute md:block hidden"
      />
      <div className="absolute h-full w-screen bg-black opacity-30" />
      <div className="relative z-10 py-8 px-20 lg:py-14 lg:px-[164px] h-full md:px-6 md:py-12">
        <header className="flex justify-between items-center">
          <img src="./logo.svg" alt="logo" />
          <nav className="flex justify-between w-[392px] md:hidden">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Events</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
          </nav>
          <img
            src="./icon-hamburger.svg"
            alt="icon hamburger"
            className="md:block hidden cursor-pointer"
            onClick={handleOpen}
          />
        </header>
        <div className="h-full w-full flex items-center justify-start">
          <div className="border-2 pt-10 pb-6 px-12 w-[650px] md:w-full md:p-6 overflow-hidden">
            <h1 className="uppercase text-7xl md:text-[40px]">
              immersive experiences that deliver
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
