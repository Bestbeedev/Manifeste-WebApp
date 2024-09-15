import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

const FaqItems = ({ questions, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer my-3">
      <div className=" flex items-center secondary p-4 rounded-md">
        {isOpen ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
        {questions}
      </div>

      <div
        className={`max-h-0 my-2 overflow-hidden duration-300 ${
          isOpen && "max-h-screen"
        }`}
      >
        <div className=" bg-blue-500 p-4 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default FaqItems;
