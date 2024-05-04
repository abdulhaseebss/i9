import img1 from "../../assets/HIS.png";

const Section4Card = () => {
  return (
    <div>
        
      {/* card */}

      <div className="flex justify-center mt-5 relative">
        <div className="w-[400px] shadow-lg bg-white p-5 rounded-2xl">
          <div className="flex justify-center">
            <img className="items-center w-[200px] mb-3" src={img1} alt="" />
          </div>
          <p className="outfit text-md">
            Advantages and Disadvantages in Hospital information system
          </p>
          <p className="outfit-card text-base">
            The advantages of Hospital Information Systems (HIS) are manifold,
            including enhanced efficiency, cost-effectiveness, and improved
            patient care. However, its important to acknowledge the
            disadvantages such as the initial setup costs and the need for
            ongoing training. While the upfront investment in HIS can be
            significant, the long-term savings and operational improvements
            often outweigh these initial expenses. Continuous training is
            essential to keep staff updated on system features, ensuring the HIS
            is used to its full potential.
          </p>
        </div>
        
      </div>

    </div>
  )
}

export default Section4Card