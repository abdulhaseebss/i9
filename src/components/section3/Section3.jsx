const Section3 = (props) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-white w-[300px] max-[750px]:w-[90%] h-auto transition-all p-2 py-5 rounded-xl">
        <p className="font-bold text-xl ml-5 outfit">{props.heading}</p>
        <p className="mt-5 mx-5 outfit-card">
          {props.pera}<span className="text-[#ff3434]"> Read More</span>
        </p>
      </div>
    </div>
  );
};

export default Section3;
