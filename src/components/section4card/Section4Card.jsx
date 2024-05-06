import img1 from "../../assets/HIS.png";

const Section4Card = (props) => {
  return (
    <div>
        
      {/* card */}

      <div className="flex justify-center mt-5 relative ">
        <div className="w-[380px] max-[750px]:w-[90%] transition-all shadow-lg bg-white p-5 rounded-2xl">
          <div className="flex justify-center">
            <img className="items-center w-[200px] mb-3" src={props.image} alt="" />
          </div>
          <p className="outfit text-md">
            {props.heading}
          </p>
          <p className="outfit-card text-base">
            {props.pera}
          </p>
        </div>
        
      </div>

    </div>
  )
}

export default Section4Card