
import vector from "../../assets/vector.png"



import Vector2 from "../../assets/vector2.svg"

const Section2 = (props) => {
  return (
    <div className="outfit">
        <>
<img className={`mt-[70px] ${props.imageHidden} max-[800px]:w-[10%]`} src={vector} alt=''/>
    <div className={`flex justify-around flex-wrap ${props.mirror}`}>
      
        <div className="img">
        <img className="w-[390px] mb-4 max-[600px]:w-[250px] mx-16" src={props.image} alt='image'/>
        </div>
        <div className="img-para text-wrap">

          <p className="font-bold text-[36px] max-[600px]:text-xl max-[1000px]:text-center">{props.heading}</p>

          <div className="max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-center">
            <p className="text-[18px] mt-14 font-medium text-[#1e1e1ea8] max-[600px]:text-sm w-[40vw] max-[1200px]:w-[50vw] max-[800px]:w-[80%]">{props.pera}</p>

        <button className={`bg-[#0065C0] mt-8 text-white p-2 px-9 rounded-full font-medium ${props.hidden}`}>Learn More</button>
          </div>
        </div>
    </div>
    <div className="flex justify-end">
    <img  className={`${props.imageHidden} max-[800px]:w-[10%]`} src={Vector2} alt=''/>

    </div>
</>
    </div>
  )
}

export default Section2