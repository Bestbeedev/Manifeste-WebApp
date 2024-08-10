import React, { useState } from "react";
import Icons from "../../utilities/Icons";
import { IoSend } from "react-icons/io5";

const SearchBar = () => {
  const [data, setData] = useState("");
  return (
    <div className="flex w-full space-x-2 ">
      <span className="w-[80%] bg-slate-800 p-2 rounded-md shadow-md">
        <input
          className="w-full outline-none px-3 border-none bg-transparent"
          placeholder="Rechercher"
          type="text"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
      </span>
      <button className="bg-blue-500 p-2 rounded-md 
      items-center shadow-md" type="submit">
        <Icons
          iconType={<IoSend className=" " size={20} />}
        />
      </button>
    </div>
  );
};

export default SearchBar;
