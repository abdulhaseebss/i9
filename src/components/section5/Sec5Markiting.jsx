import React from 'react'
import Sec5MarketingCard from './Sec5MarketingCard'
import mask1 from "../../assets/Mask1.png"
import mask2 from "../../assets/mask2.png"
import mask3 from "../../assets/mask3.jpeg"
import mask4 from "../../assets/mask4.png"
import mask5 from "../../assets/mask5.png"

const Sec5Markiting = () => {

    const obj = [
        {
            head: "Business Management",
            para: "Our journey to excellence is paved with the hard work, dedication, and passion of our team members...",
            image: mask1
        },
        {
            head: "Account Management",
            para: "At i9 Innovations, we take immense pride in the awards and recognition we have received over the years...",
            image: mask2
        },
        {
            head: "Error Reduction",
            para: "The insights and expertise of our Key Opinion Leaders (KOL) doctors have been instrumental in guiding our path...",
            image: mask3
        },
        {
            head: "Task Automation",
            para: "At i9 Innovations, we foster a culture where innovation thrives and excellence is the norm...",
            image: mask4
        },
        {
            head: "Integration Capabilities",
            para: "While we take a moment to celebrate our achievements, we remain focused on the future...  ",
            image: mask5
        },
    ]

  return (
    <>
        <div>
        <p className="text-center mt-28 font-bold text-[46px] max-[850px]:text-4xl max-[700px]:text-3xl">Essential Features of Our <span className="text-[#8ABC3E]">Healthcare Apps</span></p>
            <div className='flex justify-center gap-5 flex-wrap mt-10'>
                {
                    obj.map((item , index)=>{
                        return <Sec5MarketingCard key={index} head={item.head} pera={item.para} image={item.image}/>
                    })
                }

            </div>
        </div>
    </>
  )
}

export default Sec5Markiting