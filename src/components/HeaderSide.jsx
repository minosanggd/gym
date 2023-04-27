import Heart from "../assets/heart.png";
import HeroImg from "../assets/hero_image.png";
import Calories from "../assets/calories.png";


const HeaderSide = () => {
  return (
    <div className="mt-4 md:mt-0 w-full h-[600px] md:h-screen  bg-transparent md:bg-[#374151] relative rounded-none md:rounded-l-full md:opacity-70">
      <div className="absolute md:hidden top-0 md:top-[50px] right-[-500px]  w-[800px] md:w-[400px] h-[30vh] rounded-r-full bg-[#84cfd2] opacity-40 hue-rotate-15 brightness-50 blur-3xl contrast-200">
        <span className="text-2xl">BLUR</span>
      </div>
      <div className="w-full max-w-[300px] h-[200px] p-4 flex justify-end items-end">
        <button className="z-10 btn btn-active md:text-black bg-red-200 transition-all">
          Join Now
        </button>
      </div>
      <div className=" absolute animate-go transition-all right-0 md:right-10 mt-6 flex flex-col gap-y-2 w-fit p-4 rounded-xl bg-gray-600 ">
        <img className="w-[40px]" src={Heart} alt="" />
        <p className="text-lg text-gray-400">Heart Rate</p>
        <p className="text-3xl text-gray-200">116 BPM</p>
      </div>

      <img
        className="absolute  min-w-[300px] h-[400px] right-[-300px] md:right-[200px] shadow-img "
        src={HeroImg}
        alt=""
      />

      <div className="absolute bottom-12 right-0 md:right-32 animate-come transition-all opacity-90 col-span-1 flex gap-x-10 bg-gray-600 rounded-xl p-4 w-[300px] justify-center  items-center ml-20 mb-10">
        <img className="w-[50px]" src={Calories} alt="Calories" />
        <div className="flex h-full flex-col justify-between ">
          <p className="text-xl text-gray-300">Calories burned</p>
          <p className="text-3xl text-white">220 kcal</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSide;
