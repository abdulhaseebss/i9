import React from 'react'
import Sec3Card from './Sec3Card'
import sec1img from "../../assets/sotware1.png"
import sec2img from "../../assets/sotware2.png"
import sec3img from "../../assets/sotware3.png"
import sec4img from "../../assets/sotware4.png"
import sec5img from "../../assets/sotware5.png"
import sec6img from "../../assets/sotware6.png"


const Section3 = () => {

    const obj = [
        {
            image: sec1img,
            head: "RIS",
            para: "Picture Archiving and Communication System (PACS) revolutionizes how medical imaging studies, like X-rays, CTs, and MRIs, are stored, retrieved, presented, and shared... Read More"
        },
        {
            image: sec2img,
            head: "PACS",
            para: "A Radiology Information System (RIS) is a networked software system designed to manage medical imagery and associated data. RIS handles scheduling, tracking radiology... Read More"
        },
        {
            image: sec3img,
            head: "DICOM",
            para: "Digital Imaging and Communications in Medicine (DICOM) is the global standard for handling, storing, printing, and transmitting medical imaging information, ensuring... Read More"
        },

        {
            image: sec4img,
            head: "The Inception of RIS and PACS",
            para: "The concept of PACS was introduced in the early 1980s, primarily in the United States and Europe, as part of an effort to improve the efficiency of radiology departments... Read More"
        },

        {
            image: sec5img,
            head: "Super Dr: A Game-Changer in Medical Imaging",
            para: "Super Dr stands out in the Indian healthcare landscape by integrating a built-in PACS within its system, thereby removing the dependency on additional third-party applications... Read More"
        },

        {
            image: sec6img,
            head: "The Pioneer of Mobile PACS for CATHLAB Imagesg",
            para: "Super Dr is at the forefront of innovation with its mobile PACS capabilities, particularly for CATHLAB images, which are crucial for cardiac diagnostics and interventions... Read More"
        },

    ]

  return (
    <div className='mt-20'>
        <p className='outfit text-4xl text-center'>Understanding <span className='text-[#8ABC3E]'>RIS and PACS</span> </p>
    <div className='flex flex-wrap gap-8 mt-20 justify-center'>
        {
            obj.map((item)=>{

                return <Sec3Card head={item.head} pera={item.para} image={item.image}/>

            }) 
        }
     
    </div>
    </div>
  )
}

export default Section3