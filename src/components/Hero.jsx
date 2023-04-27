import Header from "./Header";
import Calories from "../assets/calories.png";
import Typed from "react-typed";
import HeaderSide from "./HeaderSide";

const Hero = () => {
  return (
    <div className="w-full p-4 h-screen text-white ">
      <div className="max-w-[1240px] h-[50px]  mx-auto ">
        <div className="flex flex-col md:flex-row gap-x-4 relative ">
          <div className="absolute top-[50px] left-0 w-[400px] h-[90vh] rounded-r-full bg-[#84cfd2] opacity-40 hue-rotate-15 brightness-50 blur-3xl contrast-200">
            <span className="text-2xl">BLUR</span>
          </div>
          <div className="max-w-[930px] flex flex-col">
            <Header />

            {/* body Hero */}
            <div className="max-w-[930px] mx-auto flex flex-col gap-y-10 p-4 z-10">
              <div className="relative flex justify-start items-center mt-14 bg-gray-700 rounded-full w-fit p-5 uppercase text-white">
                <div className="absolute animate-shimmy transition-all font-bold bg-[#5dd9dd]  w-20 h-[80%] rounded-full "></div>
                <span className="z-10 text-gray-200">
                  The best fitness club in the town
                </span>
              </div>
              <div className="text-center my-8 md:text-left text-5xl md:text-7xl uppercase font-bold text-inherit text-gray-200">
                <p className="mb-6">
                  <span className="stroke-text text-transparent">Shape</span>{" "}
                  YOUR
                </p>
                <Typed
                  strings={["IDEAL BODY", "own lifestyle "]}
                  typeSpeed={120}
                  backSpeed={100}
                  loop
                />
              </div>

              <div className="text-center md:text-left md:mt-8">
                <p className="text-gray-200 text-lg max-w-[700px] space tracking-widest">
                  In here we gonna help you to shape and build your ideal body
                  and live up your life to fullest
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 mt-6 md:mt-0">
                <div className="flex col-span-2 gap-x-8  items-center">
                  <div className="uppercase">
                    <p className="text-3xl mb-2 font-medium text-gray-200">
                      + 140
                    </p>
                    <p className="text-xl text-gray-500 font-bold">
                      Expert Coaches
                    </p>
                  </div>
                  <div className="uppercase">
                    <p className="text-3xl mb-2 font-medium text-gray-200">
                      + 987
                    </p>
                    <p className="text-xl text-gray-500 font-bold">
                      Member Joined
                    </p>
                  </div>
                  <div className="uppercase">
                    <p className="text-3xl mb-2 font-medium text-gray-200">
                      + 50
                    </p>
                    <p className="text-xl text-gray-500 font-bold">
                      Fitness Programs
                    </p>
                  </div>
                </div>

                {/* <div className="animate-come transition-all opacity-90 flex gap-x-10 bg-transparent rounded-xl p-4 w-[300px] justify-center  items-center ml-20 mb-10">
                  <img className="w-[50px]" src={Calories} alt="Calories" />
                  <div className="flex h-full flex-col justify-between ">
                    <p className="text-xl text-gray-300">Calories burned</p>
                    <p className="text-3xl text-white">220 kcal</p>
                  </div>
                </div> */}
              </div>
              <div className="flex justify-center md:justify-start gap-6 w-full ">
                <button className="hover:bg-opacity-75 transition-all btn btn-active">
                  Get Started
                </button>
                <button className="hover:bg-gray-600 transition-all btn ">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-full">
            <HeaderSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
