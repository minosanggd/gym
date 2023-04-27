import { ImHeart } from "react-icons/im";
import { HeartHeal } from "../assets/heartHealth.svg";

const Plans = () => {
  return (
    <div className="w-full h-screen mt-[200px] p-4 md:mt-[-300px]">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row  justify-center text-center gap-4 text-white">
          <p className="text-5xl font-bold italic stroke-text ">
            Ready to start
          </p>
          <p className="text-5xl font-bold ">Your Journey</p>
          <p className="text-5xl font-bold italic stroke-text">Now with us</p>
        </div>
        <div className="flex flex-col md:flex-row">
         <div className="grid md:grid-cols-3">
           <div className="col-span-1 text-white">
              <img className="w-[100px] text-white" src={HeartHeal} alt="" />
              <p>BASIC PLAN</p>
              <p>500,000VND</p>
           </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
