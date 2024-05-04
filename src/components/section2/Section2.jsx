
import vector from "../../assets/vector.png"
import Vector2 from "../../assets/vector2.svg"

const Section2 = (props) => {
  return (
    <div className="outfit">
        <>
<img className="mt-[70px]" src={vector} alt=''/>
    <div className="flex justify-around flex-wrap">
        
        <div className="img">
        <img className="w-[390px] h-[500px]" src={props.image} alt='image'/>
        </div>
        <div className="img-para text-wrap">
          <p className="font-bold text-[36px] ">{props.heading}</p>
          <p className="text-[18px] mt-14 font-medium text-[#1e1e1ea8]">{props.pera}
        </p>
        </div>
    </div>
    <div className="flex justify-end">
    <img  src={Vector2} alt=''/>

    </div>
</>
    </div>
  )
}

export default Section2