import React from "react";
import { GrFavorite, GrTime } from "react-icons/gr";
// import { FaBookmark } from "react-icons/fa";

const CardsVideo = ({
  id,
  title,
  videoMiniature,
  duration,
  likes,
  publicationTime,
  onClick
}) => {
  return (
    <div id={id} onClick={onClick} className="flex w-full ">
      <div className="w-full hover:bg-[#1e232b] cursor-pointer  p-1 h-full rounded-lg  flex-col flex-wrap">
        {/* <span className="absolute p-3"><FaBookmark /></span> */}
        <img className="w-full flex rounded-lg" src={videoMiniature} />
        <div className="py-2 mt-2 px-5">
          <div className="text-lg font-semibold">{title}</div>
          <div className="space-y-1">
            <div className="flex mt-2 space-x-6">
              <div className="space-x-1 flex items-center">
                <GrTime/>
              <p>{duration}</p>
              </div>
              <span className="flex items-center space-x-1">
                <GrFavorite className="" />
                <p>{likes}likes</p>
              </span>
              
            </div>
            <p>Publié:{publicationTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsVideo;
