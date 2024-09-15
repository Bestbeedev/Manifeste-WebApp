import React, { useState } from "react";
import Icons from "../../utilities/Icons";
import { IoSend } from "react-icons/io5";

const SearchBar = ({onChange,value,onClick}) => {

  return (
    <div className="flex w-full space-x-2 ">
      <span className="w-full bg-[#242a34] p-2 rounded-md shadow-md">
        <input
          className="w-full outline-none px-3 border-none bg-transparent"
          placeholder="Rechercher"
          type="text"
          onChange={onChange}
          value={value}
        />
      </span>
      <button onSubmit={onClick} onClick={onClick} className="bg-rose-500 p-2 rounded-md 
      items-center shadow-md" type="submit">
        <Icons
          iconType={<IoSend className=" " size={20} />}
        />
      </button>
    </div>
  );
};

export default SearchBar;
