import React from "react";
import welcome from "../assets/partenariat-professionnel.png";
import Icons from "../utilities/Icons";
import { FaCloudDownloadAlt, FaVideo } from "react-icons/fa";
import { BsPersonVideo2 } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Buttons from "../utilities/Buttons";
import { Link } from "react-router-dom";

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
      <div className="my-2 justify-between items-center space-x-1 flex">
        <div>
          <div className="my-10 space-x-6 items-center flex">
            <div>
              <Icons
                iconType={
                  <BsPersonVideo2
                    className="colorIcon2 text-green-400"
                    size={80}
                  />
                }
              />
            </div>
            <div>
              <h1 className="text-lg my-2">Les enseignements en Videos</h1>
              <p className="w-1/2">
                Vous pouvons suivre en ligne via les depot des enseignements
                dont nous avons faits sur la plateformes
              </p>
            </div>
          </div>
          <div className="my-10 space-x-6 items-center flex">
            <div>
              <Icons
                iconType={
                  <HiChatBubbleLeftRight
                    className="colorIcon1 text-purple-500"
                    size={80}
                  />
                }
              />
            </div>
            <div>
              <h1 className="text-lg my-2">Les enseignements en Videos</h1>
              <p className="w-1/2">
                Vous pouvons suivre en ligne via les depot des 
                enseignements
                dont nous avons faits sur la plateformes
              </p>
            </div>
          </div>
          <div className="my-10 space-x-6 items-center flex">
            <div>
              <Icons
                iconType={
                  <FaCloudDownloadAlt
                    className="colorIcon3 text-orange-400 "
                    size={80}
                  />
                }
              />
            </div>
            <div>
              <h1 className="text-lg my-2">Les enseignements en Videos</h1>
              <p className="w-1/2">
                Vous pouvons suivre en ligne via les depot des enseignements
                dont nous avons faits sur la plateformes
              </p>
            </div>
          </div>
        </div>
        {/* <div className='flex mx-10'>
          <img className='size-[18rem] my-auto ' 
         src={welcome} alt="" />
        </div>
                    */}
      </div>
      <Link to="/login">
        <Buttons styled={"buttonStart"} value={"Commencez maintenant"} />
      </Link>
    </div>
  );
};

export default Welcome;
