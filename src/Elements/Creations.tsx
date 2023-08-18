import Creation from "./Creations/Creation";

const Creations = () => {
  return (
    <section className="w-full max-w-[1114px] flex items-center relative flex-col">
      <div className="flex justify-between md:justify-center items-end w-full">
        <h1 className="md:text-4xl md:text-center">our creations</h1>
        <button className="border-2 border-black px-11 py-3 text-sm uppercase text-black tracking-[5px] hover:bg-black hover:text-white transition-colors md:hidden">
          see all
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-4 relative gap-8 mt-[84px] lg:grid-cols-4 lg:grid-rows-2 md:flex flex-col md:gap-10">
        <Creation name="deep earth" img="image-deep-earth.jpg" />
        <Creation name="Night arcade" img="image-night-arcade.jpg" />
        <Creation name="Soccer team VR" img="image-soccer-team.jpg" />
        <Creation name="The grid" img="image-grid.jpg" padding={80} />
        <Creation name="From up above VR" img="image-from-above.jpg" />
        <Creation name="Pocket borealis" img="image-pocket-borealis.jpg" />
        <Creation name="The curiosity" img="image-curiosity.jpg" />
        <Creation name="Make it fisheye" img="image-fisheye.jpg" />
      </div>
      <button className="border-2 border-black px-11 py-3 text-sm uppercase text-black tracking-[5px] hover:bg-black hover:text-white transition-colors md:block hidden mt-10">
        see all
      </button>
    </section>
  );
};

export default Creations;
