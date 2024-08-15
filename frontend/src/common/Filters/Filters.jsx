import React, { useEffect, useRef, useState } from "react";
import Buttons from "../../utilities/Buttons";

const Filters = () => {
  const [buttons, setButtons] = useState([
    { id: 1, isActive: false,value:'Tous' },
    { id: 2, isActive: false,value:'En ligne récemment' },
    { id: 3, isActive: false,value:'Enseignement Biblique' },
    { id: 4, isActive: false,value:'Prières' },
    { id: 5, isActive: false,value:'Exhortations Bibliques' },
    { id: 6, isActive: false,value:'Événements' },
    { id: 7, isActive: false,value:'Retraite Spirituelle' }
  ]);

  const handleActive = (buttonId) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => ({
        ...button,
        isActive: button.id === buttonId,
      }))
    );
  };
  return (
    <div className="flex bg-slate-900 py-[3px] w-full fixed space-x-2">
    {buttons.map(items=>(
      <Buttons
      key={items.id}
        styled={`${items.isActive?'activeBtn':''} bg-slate-800 px-[10px] py-[8px] w-fit my-3 shadow-xl `}
        value={items.value}
        onClick={()=>handleActive(items.id)}
      />
    ))}
    </div>
  );
};

export default Filters;
