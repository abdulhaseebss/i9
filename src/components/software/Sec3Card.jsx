import { useState } from "react";


const Sec3Card = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const truncatedText = `${props.pera.split(" ").splice(0, 15).join(" ")}...`;
    const fullText = props.pera;
  
    function toggleText() {
      setIsOpen(!isOpen);
    }


  return (
    <div className='w-[440px] max-[700px]:w-[90%] transition-all bg-[#f1f1f1] border-2  border-gray-200 shadow-lg p-8 rounded-2xl'>
       <div className='flex justify-center'>
       <img className=' max-[1200px]:w-[60%] max-[600px]:w-[80%]' src={props.image} alt=''/>
       </div>
       <div className='para text mx-2 mt-5'>
            <p className='outfit text-xl'>{props.head}</p>
            <p className="mt-3">
          {isOpen ? fullText : truncatedText}
          <span className="text-[#ff3434] cursor-pointer" onClick={toggleText}>
            {isOpen ? " Less" : " Read More"}
          </span>
        </p>
       </div>
        
    </div>
  )
}

export default Sec3Card