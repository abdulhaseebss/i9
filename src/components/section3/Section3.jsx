import { useState } from "react";


const Section3 = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const truncatedText = `${props.pera.split(" ").splice(0, 15).join(" ")}...`;
  const fullText = props.pera;

  function toggleText() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-white w-[300px] max-[750px]:w-[90%] h-auto transition-all p-2 py-5 rounded-xl">
        <p className="font-bold text-xl ml-5 outfit">{props.heading}</p>

        <p className="mt-5 mx-5 outfit-card transition-all">
          {isOpen ? fullText : truncatedText}
          <span className="text-[#ff3434] cursor-pointer" onClick={toggleText}>
            {isOpen ? " Less" : " Read More"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Section3;
