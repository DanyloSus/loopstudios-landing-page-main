const MobileMenu = () => {
  const handleClose = () => {
    document.getElementById("mobileMenu")?.classList.toggle("-top-[100%]");
    document.getElementById("mobileMenu")?.classList.toggle("top-0");
  };

  return (
    <div
      className="bg-black text-white absolute z-20 h-screen w-screen px-6 py-12 -top-[100%]"
      id="mobileMenu"
    >
      <div className="flex justify-between items-center">
        <img src="./logo.svg" alt="logo" />
        <img src="./icon-close.svg" alt="icon close" onClick={handleClose} />
      </div>
      <div className="h-full w-full flex flex-col justify-center items-start gap-3">
        <h2>About</h2>
        <h2>Careers</h2>
        <h2>Events</h2>
        <h2>Products</h2>
        <h2>Support</h2>
      </div>
    </div>
  );
};

export default MobileMenu;
