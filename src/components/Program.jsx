import Dumbell from "../assets/dumbell.png";
import RightArrow from "../assets/rightArrow.png";
import Running from "../assets/runing.png";

const Program = () => {
  return (
    <div className="w-full h-[1000px] md:h-[400px] p-4">
      <div className="max-w-[1240px] h-full mx-auto bg-transparent mt-4 ">
        <div className="flex flex-col ">
          <div className=" flex flex-col gap-8 text-center justify-center md:flex-row uppercase text-white">
            <p className="text-6xl font-bold stroke-text">Explore Our</p>
            <p className="text-6xl font-bold italic">Programs</p>
            <p className="text-6xl font-bold stroke-text">To Shape You</p>
          </div>

          <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 my-16 text-white">
            <div className="flex flex-col gap-y-2 p-4 col-span-1 bg-gray-500 rounded-xl hover:bg-[#5dd9dd] transition-all cursor-pointer">
              <img className="w-10 my-2" src={Dumbell} alt="" />
              <p className="text-xl font-bold">Strength Training</p>
              <p className="text-justify my-4">
                In this program, you are trained to improve your strength
                through many exercises.
              </p>
              <div className="flex justify-center lg:justify-start gap-x-28 mt-4 ">
                <p>Join Now</p>
                <img className="w-[30px] h-6" src={RightArrow} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 p-6 col-span-1 bg-gray-500 rounded-xl hover:bg-[#5dd9dd] transition-all cursor-pointer">
              <img className="w-10 my-2" src={Dumbell} alt="" />
              <p className="text-xl font-bold">Strength Training</p>
              <p className="text-justify my-4">
                In this program, you are trained to improve your strength
                through many exercises.
              </p>
              <div className="flex justify-center lg:justify-start gap-x-28 mt-4 ">
                <p>Join Now</p>
                <img className="w-[30px] h-6" src={RightArrow} alt="" />
              </div>
            </div>{" "}
            <div className="flex flex-col gap-y-2 p-6 col-span-1 bg-gray-500 rounded-xl hover:bg-[#5dd9dd] transition-all cursor-pointer">
              <img className="w-10 my-2" src={Dumbell} alt="" />
              <p className="text-xl font-bold">Strength Training</p>
              <p className="text-justify my-4">
                In this program, you are trained to improve your strength
                through many exercises.
              </p>
              <div className="flex justify-center lg:justify-start gap-x-28 mt-4 ">
                <p>Join Now</p>
                <img className="w-[30px] h-6" src={RightArrow} alt="" />
              </div>
            </div>{" "}
            <div className="flex flex-col gap-y-2 p-6 col-span-1 bg-gray-500 rounded-xl hover:bg-[#5dd9dd] transition-all cursor-pointer">
              <img className="w-10 my-2" src={Dumbell} alt="" />
              <p className="text-xl font-bold">Strength Training</p>
              <p className="text-justify my-4">
                In this program, you are trained to improve your strength
                through many exercises.
              </p>
              <div className="flex justify-center lg:justify-start gap-x-28 mt-4 ">
                <p>Join Now</p>
                <img className="w-[30px] h-6" src={RightArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
