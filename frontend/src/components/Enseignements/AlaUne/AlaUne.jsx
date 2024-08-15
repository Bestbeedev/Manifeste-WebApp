import React, { useState } from "react";
import dataVideos from "./data.video.js";
import CardsVideo from "../../../common/Video.Cards/CardsVideo";
import Buttons from "../../../utilities/Buttons.jsx";
import { useNavigate } from "react-router-dom";

const AlaUne = () => {
  
  const [videos, setVideos] = useState(dataVideos);
  const [buttons, setButtons] = useState([
    { id: 1, isActive: false, value: "Tous", category: "all" },
    { id: 2, isActive: false, value: "En ligne récemment", category: "ER" },
    { id: 3, isActive: false, value: "Enseignement Biblique", category: "EB" },
    { id: 4, isActive: false, value: "Prières", category: "PR" },
    {id: 5,isActive: false,value: "Exhortations Bibliques",category: "EXB",},
    { id: 6, isActive: false, value: "Événements", category: "EV" },
    { id: 7, isActive: false, value: "Retraite Spirituelle", category: "RS" },
  ]);



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
    if (category === "RS") {
      setVideos(dataVideos.filter((item) => item.category === "RS"));
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
    // On filtre les vidéos selon le catégorie
    filtrage(categories);
  };
  
  const NavigateToPlay=useNavigate()
  const handleVideoPlaying = () => {
    NavigateToPlay('/videos/media1')
    //Ajouter le code pour démarrer la vidéo
  };

  return (
    <div className="w-full overflow-y-auto h-full px-10 ">
      {/* ////Filtres dynamique */}
      <div className=" pb-16">
        <div className="flex bg-slate-900 py-[3px] w-full fixed space-x-2">
          {buttons.map((items) => (
            <Buttons
              key={items.id}
              styled={`${
                items.isActive ? "activeBtn" : ""
              } bg-slate-800 px-[10px] py-[8px] w-fit my-3 shadow-xl `}
              value={items.value}
              onClick={() => handleActive(items.id, items.category)}
            />
          ))}
        </div>
        {/* ////Fin filtres */}
      </div>

      <div>
        <div className=" my-3 grid-cols-3 h-full grid gap-y-4 gap-x-6 w-full mb-4">
          {videos.map((cards) => (
            <CardsVideo
              key={cards.id}
              title={cards.title}
              videoMiniature={cards.videoMiniature}
              duration={cards.duration}
              likes={cards.likes}
              publicationTime={cards.publicationTime}
              onClick={handleVideoPlaying}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlaUne;
