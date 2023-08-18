const Sections = () => {
  return (
    <section className=" w-full max-w-[1114px] flex items-end relative md:flex flex-col">
      <img
        src="./desktop/image-interactive.jpg"
        alt="image interactive"
        className="reveal md:hidden"
      />
      <img
        src="./mobile/image-interactive.jpg"
        alt="image interactive"
        className="reveal md:block hidden"
      />
      <div className="w-[540px] pt-[100px] pl-[100px] absolute bg-white right-0 -bottom-1 md:relative md:w-full md:p-0 md:text-center md:mt-10">
        <h1 className="text-5xl uppercase mb-6 md:text-4xl">
          The leader in interactive VR
        </h1>
        <p className="text-[15px] text-dark-gray md:text-[17px]">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Sections;
