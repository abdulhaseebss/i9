import React from "react";
import banner from "../../assets/banner.png";
import ShapeGroup from "../../assets/ShapeGroup.png";

const Banner = (props) => {

  return (
    <>
      <div className="mt-12 flex items-center justify-center">
        <img className="absolute top-[25vh]" src={banner} alt="banner" />
        <div  className="outfit text-center relative top-[15vh] text-5xl text-[#0065C0] ">
          <h2>
            {props.heading}
          </h2>
          <p className="text-3xl mt-8">{props.text}</p>
        </div>
      </div>

        <div className="flex justify-center items-end h-[60vh]">
          <img src={ShapeGroup} alt="ShapeGroup" />
        </div>
    </>
  );
};

export default Banner;
