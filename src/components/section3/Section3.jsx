const Section3 = (props) => {
  return (
    <div>
      <div className="card bg-white w-[300px] h-[55vh] p-2 py-5 rounded-xl">
        <p className="font-bold text-xl ml-5 outfit">{props.heading}</p>
        <p className="mt-5 mx-5 outfit-card">
          {props.pera}<span className="text-[#ff3434]"> Read More</span>
        </p>
      </div>
    </div>
  );
};

export default Section3;
