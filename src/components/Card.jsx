import React from "react";

export default function Card() {
  return (
    <>
      <div className=" flex justify-center">
      
          <div className=" hover:text-white cursor-pointer hover:bg-black h-32 w-32 mr-4 font-bold text-5xl text-center flex items-center justify-center rounded-full bg-white">
            <p>3</p>
          </div>
       
        <div className="md:flex bg-white justify-center   rounded-xl overflow-hidden">
            <div className="rounded-xl">
                <img className="md:w-28 md:h-full w-full h-32" src="https://images.pexels.com/photos/18608160/pexels-photo-18608160/free-photo-of-teide-nationalpark-teneriffa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"/>
            </div>
            <div className="p-5 text-sm">
                <p className=" text-orange-500 uppercase text-xl">Shabbir Anjum</p>
                <p className="text-blue-500">This is Card Enter any Info here</p>
                <button className="border-2 rounded-xl p-2 w-full mt-2 hover:bg-purple-700 hover:text-white">Enter Info</button>
            </div>
        </div>
      </div>
    </>
  );
}
