import React, { useEffect, useState } from "react";
import dataVideos from "./data.video.js";
import CardsVideo from "../../../common/Video.Cards/CardsVideo";
import Buttons from "../../../utilities/Buttons.jsx";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar.jsx";
import UseFetch from "../../../Hooks/UseFetch.js";

const AlaUne = () => {
  const [buttons, setButtons] = useState([
    { id: 1, isActive: false, value: "Tous", category: "all" },
    { id: 2, isActive: false, value: "En ligne récemment", category: "ER" },
    { id: 3, isActive: false, value: "Enseignement Biblique", category: "EB" },
    { id: 4, isActive: false, value: "Prières", category: "PR" },
    {
      id: 5,
      isActive: false,
      value: "Exhortations Bibliques",
      category: "EXB",
    },
    { id: 6, isActive: false, value: "Retraite Spirituelle", category: "RS" },
  ]);
  
  const {data,loadMsg}=UseFetch('http://localhost:5000/videos')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (data) {
      setVideos(data);
    }
  }, [data]);

  const filtrage = (category) => {
    if (category === "ER") {
      setVideos(dataVideos.filter((item) => item.category === "ER"));
    }
    if (category === "EB") {
      setVideos(dataVideos.filter((item) => item.category === "EB"));
    }
    if (category === "PR") {
      setVideos(dataVideos.filter((item) => item.category === "PR"));
    }
    if (category === "EXB") {
      setVideos(dataVideos.filter((item) => item.category === "EXB"));
    }
    if (category === "EV") {
      setVideos(dataVideos.filter((item) => item.category === "EV"));
    }
    if (category === "all") {
      setVideos(dataVideos);
    }
  };

  const handleActive = (buttonId, categories) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => ({
        ...button,
        isActive: button.id === buttonId,
      }))
    );
    filtrage(categories);
  };

  const NavigateToPlay = useNavigate();
  const handleVideoPlaying = (idUrl, title, likes) => {
    NavigateToPlay(`/videos/${idUrl}`, {
      replace: true,
      state: { title, likes },
    });
  };

  const [query, setQuery] = useState("");
  const handleSearching = (e) => {
    setQuery(e.target.value);
  };

  const [errorSearch, setErrorSearch] = useState(false);

  const handleSearch = () => {
    const filteredVideos = dataVideos.filter((isSearching) =>
      isSearching.title.toLowerCase().includes(query)
    );
    if (filteredVideos) {
      setVideos(filteredVideos);
    } else {
      setErrorSearch(true);
    }
  };



  return (
    <div className="w-full overflow-y-auto overflow-hidden  h-full  px-8 ">
      <div className="flex sidebar flex-1 fixed  w-[67%] pb-10  py-2 -my-1 items-center">
        <SearchBar
          onClick={handleSearch}
          onChange={handleSearching}
          value={query}
        />
      </div>
      {/* ////Filtres dynamique */}
      <div className=" w-full mt-12 overflow-x-hidden flex pb-16">
        <div className="flex py-[3px] w-[68%] flex-1 fixed  sidebar space-x-3 ">
          {buttons.map((items) => (
            <Buttons
              key={items.id}
              styled={`${
                items.isActive ? "activeBtn" : ""
              } bg-[#242a34] px-[10px] py-[8px] w-fit my-3 shadow-xl `}
              value={items.value}
              onClick={() => handleActive(items.id, items.category)}
            />
          ))}
        </div>
      </div>

      <div className=" ">
        {errorSearch && errorSearch ? (
          <h1 className="text-xl">{`Aucune video disponible pour "${query}"`}</h1>
        ) : (
          ""
        )}

        {loadMsg && (
          <div className="flex justify-center w-full ">
            <h1 className="text-xl text-center my-[20%] mx-auto">
              Chargement des videos.....
            </h1>
          </div>
        )}
        <div className="my-3 grid-cols-3 h-full grid gap-y-4 gap-x-6 w-full mb-4">
          {videos &&
            videos.map((cards) => (
              <CardsVideo
                id={cards.id}
                key={cards.id}
                title={cards.title}
                videoMiniature={cards.videoMiniature}
                duration={cards.duration}
                likes={cards.likes}
                publicationTime={cards.publicationTime}
                onClick={() =>
                  handleVideoPlaying(cards.id, cards.title, cards.likes)
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AlaUne;
