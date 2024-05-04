import Section2 from "../components/section2/Section2"
import Section3 from "../components/section3/Section3"
import Group from "../assets/Group1321314912.png"
import Banner from "@/components/banner/Banner"


const Interoperability = () => {

  const text = <p><span className="text-[#8ABC3E]">The Essential Role</span>  of Hospital <br /> Information Systems</p>
  const peragraph = <p>In the rapidly evolving landscape of healthcare, the integration of <br/> technology has become a cornerstone for enhancing operational <br/> efficiency and elevating patient care standards. At the heart of <br/> this technological revolution lies the Hospital Information System <br/> (HIS), a comprehensive suite that seamlessly integrates various <br/> aspects of hospital operations, from patient management to <br/> administrative workflows. The adoption of HIS is not just a trend <br/> but a necessary evolution to meet the increasing demands of <br/> modern healthcare delivery, ensuring that patient care is both <br/> effective and efficient.</p>

  return (
<>
<Banner heading={"Maximizing Efficiency"} text={"Advantages of Hospital Information System"}/>
<Section2 image={Group} heading={text} pera={peragraph}/>
<Section3/>

</>
  )
}

export default Interoperability