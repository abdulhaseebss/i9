import React from "react";
import FaqCard from "./FaqCard";

const SoftwareFaq = () => {
  const obj = [
    {
      ques: "What is an EMR record?",
      ans: "Old data migration ensures continuity of care, regulatory compliance, operational efficiency, and cost savings by transferring critical patient information from legacy systems to advanced HMIS solutions.",
    },

    {
      ques: "What is an EMR record?",
      ans: "Old data migration ensures continuity of care, regulatory compliance, operational efficiency, and cost savings by transferring critical patient information from legacy systems to advanced HMIS solutions.",
    },

    {
      ques: "What is the difference between RIS and EMR?",
      ans: "Old data migration ensures continuity of care, regulatory compliance, operational efficiency, and cost savings by transferring critical patient information from legacy systems to advanced HMIS solutions.",
    },

    {
      ques: "What are the advantages of PACS and RIS integration?",
      ans: "Old data migration ensures continuity of care, regulatory compliance, operational efficiency, and cost savings by transferring critical patient information from legacy systems to advanced HMIS solutions.",
    },

    {
      ques: "What is the difference between PACS and DICOM?",
      ans: "Old data migration ensures continuity of care, regulatory compliance, operational efficiency, and cost savings by transferring critical patient information from legacy systems to advanced HMIS solutions.",
    },

    {
      ques: "Is PACS a server?",
      ans: "Old data migration ensures continuity of care, regulatory compliance, operational efficiency, and cost savings by transferring critical patient information from legacy systems to advanced HMIS solutions.",
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-3xl mt-28 text-center outfit w-[80%]">
          
          <span className="text-[#8ABC3E]"> FAQs</span> 
        
        </h2>
      </div>

      <div className="mt-16">
        {obj.map((item, index) => {
          return <FaqCard key={index} ques={item.ques} ans={item.ans} />;
        })}
      </div>
    </div>
  );
};

export default SoftwareFaq;
