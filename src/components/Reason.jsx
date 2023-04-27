import Tick from "../assets/tick.png";
import IMG1 from "../assets/image1.png";
import IMG2 from "../assets/image2.png";
import IMG3 from "../assets/image3.png";
import IMG4 from "../assets/image4.png";
import Adidas from "../assets/adidas.png";
import NB from "../assets/nb.png";
import Nike from "../assets/nike.png";


const Reason = () => {
  return (
    <div className="w-full h-[500px] p-4 mt-[400px] lg:mt-[60px]">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col md:flex-row ">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 uppercase mx-auto ">
          <div className="w-full h-full p-4 col-span-2 shadow-img">
            <div className="max-w-[500px] h-full flex justify-center items-center gap-4">
              <div className="w-[30%] h-[100%] ">
                <img
                  className="rounded-full w-full h-full m-[10px]"
                  src={IMG1}
                  alt=""
                />
              </div>
              <div className="flex w-[70%] h-[100%]">
                <div className="">
                  <img
                    className="rounded-full w-[100%] h-[50%] m-[10px]  "
                    src={IMG2}
                    alt=""
                  />
                  <div className="flex h-[50%] ">
                    <img
                      className="rounded-full w-[50%] h-[100%] m-[10px]    "
                      src={IMG3}
                      alt=""
                    />
                    <img
                      className="rounded-full w-[50%] h-[100%] m-[10px]  "
                      src={IMG4}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col col-span-1 gap-y-6 ml-[-70px] mt-[40px]">
            <p className="text-[#f9553e] font-bold text-xl">Some Reason</p>
            <p className=" text-xl md:text-5xl font-bold text-white">
              <span className="stroke-text">WHY </span>
              CHOOSE US?
            </p>
            <div className=" p-4 flex flex-col gap-4 text-xl font-bold text-white">
              <div className="flex  ">
                <img className=" w-[30px] h-[30px] md:mr-4" src={Tick} alt="" />
                <p>OVER 140+ EXPERT COACHS</p>
              </div>
              <div className="flex">
                <img className=" w-[30px] h-[30px] md:mr-4" src={Tick} alt="" />
                <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
              </div>
              <div className="flex">
                <img className=" w-[30px] h-[30px] md:mr-4" src={Tick} alt="" />
                <p>1 FREE PROGRAM FOR NEW MEMBER</p>
              </div>
              <div className="flex">
                <img className=" w-[30px] h-[30px] md:mr-4" src={Tick} alt="" />
                <p>RELIABLE PARTNERS</p>
              </div>
            </div>
            <div className="flex flex-col text-left p-4">
              <p className="text-xl text-gray-300 font-bold">OUR PARTNERS</p>
              <div className="flex gap-x-4">
                <img className="w-[40px]" src={Adidas} alt="" />
                <img className="w-[40px]" src={NB} alt="" />
                <img className="w-[40px]" src={Nike} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
