import Logo from "../assets/logo.png";
import HeroImgBack from "../assets/hero_image_back.png";
import { ImMenu } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div className="w-full relative ">
      <div className="max-w-[930px] h-full flex justify-between items-center ">
        <div className="w-20 h-full flex items-center gap-2 ">
          <img className="text-red-10" src={Logo} alt="Logo" />
          <h1 className="text-3xl font-medium font-sans">
            San<span className="text-primary font-bold">Gym</span>
          </h1>
        </div>

        {/* <div className="md:hidden"></div> */}

        {/* Menu mobile */}
        <div className=" md:hidden fixed w-full grid grid-cols-4 mt-[150px] z-[11]">
          <div className=" z-20 col-span-1 hover:translate-x-[4px]  transition-all  cursor-pointer w-[100px] h-[50px] flex justify-center items-center fixed right-0 top-[10px] ">
            <div className="">
              {isOpenNav ? (
                <GrClose
                  className="text-5xl hover:text-[#5dd9dd] hover:rotate-180 duration-300 transition-all"
                  onClick={() => setIsOpenNav(false)}
                />
              ) : (
                <ImMenu
                  className="text-5xl hover:text-[#5dd9dd] transition-all  "
                  onClick={() => setIsOpenNav(true)}
                />
              )}
            </div>

            {/* <ImMenu
              className="text-5xl hover:text-[#5dd9dd] transition-all  "
              onClick={() => setIsOpenNav(true)}
            />
            <GrClose
              className="text-5xl hover:text-[#5dd9dd] hover:rotate-180 duration-300 transition-all"
              onClick={() => setIsOpenNav(false)}
            /> */}
          </div>

          <div
            className={`${
              isOpenNav ? "translate-x-[-20px]" : "translate-x-[-600px]"
            } flex col-span-3 transition-all ease-in duration-500 md:hidden top-0 mt-[220px] w-full  max-h-[500px]  bg-gray-900 rounded-br-full`}
          >
            <ul className=" w-[80%] h-full p-8 flex flex-col text-center gap-y-6 uppercase text-2xl ">
              <li className="rounded-full cursor-pointer flex items-center hover:text-white p-4 hover:bg-[#5dd9dd]/20 duration-500 w-fit h-[60px] transition-all ">
                Home
              </li>
              <li className="rounded-full cursor-pointer flex items-center hover:text-white p-4 hover:bg-[#5dd9dd]/20 duration-500 w-fit h-[60px] transition-all">
                Programs
              </li>
              <li className="rounded-full cursor-pointer flex items-center hover:text-white p-4 hover:bg-[#5dd9dd]/20 duration-500 w-fit h-[60px] transition-all">
                Testimonials
              </li>
              <li className="rounded-full cursor-pointer flex items-center hover:text-white p-4 hover:bg-[#5dd9dd]/20 duration-500 w-fit h-[60px] transition-all">
                Why us
              </li>
              <li className="rounded-full cursor-pointer flex items-center hover:text-white p-4 hover:bg-[#5dd9dd]/20 duration-500 w-fit h-[60px] transition-all">
                Plans
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        className="animate-go transition-all absolute top-28 right-[-100px] bottom-0 min-w-[300px] min-h-max filter text-primary grayscale blur-sm"
        src={HeroImgBack}
        alt=""
      />
    </div>
  );
};

export default Header;
