import React from "react";


const Sec3Award = (props) => {
  return (
    <>
      <div className="outfit mt-16 flex justify-center">
        <div className="w-[500px] max-[1100px]:w-[98%] transition-all max-[600px]:w-[95%]  shadow-2xl p-8 rounded-2xl">

        <div className="flex justify-center">
          <img src={props.image} alt="image" />
        </div>
        <h1>{props.head}</h1>
        <p className=" font-normal mt-4">
          {props.pera}
        </p>

        </div>

      </div>
    </>
  );
};

export default Sec3Award;
