import React from "react";
// import { FaBookmark } from "react-icons/fa";

const CardsVideo = ({
  title,
  videoMiniature,
  duration,
  likes,
  publicationTime,
  onClick
}) => {
  return (
    <div onClick={onClick} className="flex w-full ">
      <div className="w-full hover:bg-slate-800 cursor-pointer  p-1 h-full rounded-lg  flex-col flex-wrap">
        {/* <span className="absolute p-3"><FaBookmark /></span> */}
        <img className="w-full flex rounded-lg" src={videoMiniature} />
        <div className="py-2 mt-2 px-5">
          <div className="text-lg font-semibold">{title}</div>
          <div className="space-y-1">
            <div className="flex mt-2 space-x-4">
              <p>Durée:{duration}</p>
              <p>{likes}likes</p>
            </div>
            <p>Publié:{publicationTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsVideo;
