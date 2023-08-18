interface CreationProps {
  name: string;
  img: string;
  padding?: number;
}

const Creation = ({ name, img, padding }: CreationProps) => {
  return (
    <div
      className="relative w-[256px] h-[450px] md:w-full md:h-[120px] cursor-pointer reveal"
      id="creation"
    >
      <img
        src={`./desktop/${img}`}
        alt={img}
        className="absolute w-[256px] h-[450px] md:hidden object-cover"
      />
      <img
        src={`./mobile/${img}`}
        alt={img}
        className="absolute w-full h-[120px] md:block hidden object-cover"
      />
      <div className="flex items-end justify-end md:justify-start w-[256px] h-[450px] md:h-[120px] md:max-w-[375px] relative z-10 transition-colors">
        <h1 className="text-white p-10 md:p-5 md:pr-[70px] text-3xl bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent  transition-colors md:h-full md:flex md:items-end md:justify-start md:text-2xl">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Creation;
