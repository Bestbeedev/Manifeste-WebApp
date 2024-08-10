import React from "react";
import Buttons from "../utilities/Buttons";
import { Link } from "react-router-dom";
import mediaPlayer from "../assets/svg.welcome/media-player.svg";
import download from "../assets/svg.welcome/download.svg";
import chats from "../assets/svg.welcome/chats.svg";

const Welcome = () => {
  return (
    <div
      className="mx-auto px-32 items-center 
   h-full py-8 w-full"
    >
      <div className="">
        <h1
          className="my-auto justify-center 
        font-regular text-3xl"
        >
          Soyez les bienvenues sur Manifeste.com
        </h1>
        <p>Recevez des enseignements bibliques bases sur la parole elle-meme</p>
      </div>

      <div className="my-2 justify-between items-center space-x-4 flex">
        <div className="flex justify-between space-x-3 items-center">
          <div className="my-10 card hover:transition-all hover:bg-blue-700 hover:border ease-in-out rounded-md p-4 shadow-lg 
          space-x-6 flex-col items-center flex">
            <div>
              <img src={mediaPlayer} className="size-32" />
            </div>
            <div>
              <h1 className="text-lg my-2">Les enseignements en Videos</h1>
              <p className="w-full">
                Vous pouvons suivre en ligne via les depot des enseignements
                dont nous avons faits sur la plateformes
              </p>
            </div>
          </div>

          <div className="my-10 card hover:transition-all hover:bg-blue-700 hover:border ease-in-out rounded-md p-4 shadow-lg  space-x-6 flex-col items-center flex">
            <div>
              <img src={download} className="size-32" />
            </div>
            <div>
              <h1 className="text-lg my-2">Les enseignements en Videos</h1>
              <p className="w-full">
                Vous pouvons suivre en ligne via les depot des enseignements
                dont nous avons faits sur la plateformes
              </p>
            </div>
          </div>

          <div className="my-10 card hover:transition-all hover:bg-blue-700 hover:border ease-in-out rounded-md p-4 shadow-lg space-x-6 flex-col items-center flex ">
            <div>
              <img src={chats} className="size-32" />
            </div>
            <div>
              <h1 className="text-lg my-2">Les enseignements en Videos</h1>
              <p className="w-full">
                Vous pouvons suivre en ligne via les depot des enseignements
                dont nous avons faits sur la plateformes
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link to="/login">
        <Buttons styled={"buttonStart"} value={"Commencez maintenant"} />
      </Link>
    </div>
  );
};

export default Welcome;
