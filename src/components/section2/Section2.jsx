
import vector from "../../assets/vector.png"
import Group from "../../assets/Group1321314912.png"
import Vector2 from "../../assets/vector2.svg"

const Section2 = () => {
  return (
    <div>
        <>
<img className="mt-[70px]" src={vector} alt=''/>
    <div className="flex justify-around flex-wrap">
        
        <div className="img">
        <img className="w-[390px] h-[500px]" src={Group} alt=''/>
        </div>
        <div className="img-para text-wrap">
          <p className="font-bold text-[36px] outfit"><span className="text-[#8ABC3E]">The Essential Role </span> of Hospital <br/> Information Systems</p>
          <p className="text-[18px] mt-14 outfit-card">In the rapidly evolving landscape of healthcare, the integration of <br/> technology has become a cornerstone for enhancing operational <br/> efficiency and elevating patient care standards. At the heart of <br/> this technological revolution lies the Hospital Information System <br/> (HIS), a comprehensive suite that seamlessly integrates various <br/> aspects of hospital operations, from patient management to <br/> administrative workflows. The adoption of HIS is not just a trend <br/> but a necessary evolution to meet the increasing demands of <br/> modern healthcare delivery, ensuring that patient care is both <br/> effective and efficient.
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