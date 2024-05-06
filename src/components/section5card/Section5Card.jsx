 
const Section5Card = (props) => {
  return (
    <div>
        
      {/* card */}

  <div className="flex justify-center">

     <div className="card bg-white transition-all w-[350px] max-[700px]:w-[90%] p-2 py-5 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-white">
     <p className="font-bold text-xl ml-5 outfit ">{props.heading}</p>
     <p className="mt-5 ml-5 outfit-card">{props.pera}</p>
     </div>
  </div>


    </div>
  )
}

export default Section5Card