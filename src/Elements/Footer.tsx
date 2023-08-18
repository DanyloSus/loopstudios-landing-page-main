const Footer = () => {
  return (
    <footer className="bg-black text-white px-[164px] py-11 flex justify-between items-center md:px-5 md:py-[100px] md:flex-col md:justify-center md:text-center md:gap-3">
      <div className="flex flex-col gap-8 md:gap-3 items-start">
        <img src="./logo.svg" alt="logo" />
        <nav className="flex gap-3 lg:gap-8 md:flex-col md:gap-0 md:items-center md:justify-center md:w-full">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Events</a>
          <a href="#">Products</a>
          <a href="#">Support</a>
        </nav>
      </div>
      <div className="flex flex-col gap-8 md:gap-3 items-end md:w-full md:text-center md:items-center">
        <div className="flex gap-3 items-center md:w-full md:justify-center">
          <a href="#">
            <img src="./icon-facebook.svg" alt="icon facebook" />
          </a>
          <a href="#">
            <img src="./icon-twitter.svg" alt="icon twitter" />
          </a>
          <a href="#">
            <img src="./icon-pinterest.svg" alt="icon pinterest" />
          </a>
          <a href="#">
            <img src="./icon-instagram.svg" alt="icon instagram" />
          </a>
        </div>
        <p className="text-very-dark-gray text-right md:text-center">
          © {new Date().getFullYear()} Loopstudios. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
