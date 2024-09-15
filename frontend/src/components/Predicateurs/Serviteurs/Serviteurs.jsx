import React from "react";
import imgSer from "../../../Images/imgVid.jpeg";

const Serviteurs = () => {
  return (
    <div className="w-full overflow-y-auto h-full  px-16 secondary rounded-lg">
      <div className=" border-b-white  w-full border-b border-dashed">
        <h1 className="text-yellow-300 my-5 text-xl ">
          Biographie de Nom du Serviteur de Dieu
        </h1>
      </div>

      <div className="my-12 items-center flex   justify-center space-x-16">
        <div className="space-y-2 ">
          <h1>
            <strong>Nom complet</strong> : Nom du serviteur de Dieu
          </h1>
          <h1>
            <strong>Date de naissance </strong>: Date de naissance
          </h1>
          <h1>
            <strong>Lieu de naissance </strong>:Ville, Pays
          </h1>
          <h1>
            <strong>Fonction</strong>:Apôtre a Manifeste
          </h1>
          <h1>
            <strong>Ministère principal </strong>: Nom du Manifeste
          </h1>
        </div>
        <div>
          <img
            className=" rounded-md object-cover size-40 w-full"
            src={imgSer}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col leading-normal space-y-4 justify-center px-24 w-full">
        <h1 className="text-xl text-blue-400 ">Introduction</h1>
        <p className="p-5 rounded-md bg-[#242a34]">
          [Nom du serviteur de Dieu] est reconnu pour son impact spirituel et
          son dévouement envers Dieu. Né à [ville], [pays], il/elle a répondu à
          l'appel de Dieu à un jeune âge et a consacré sa vie au service du
          royaume de Dieu. Sa mission a touché des millions de personnes à
          travers des enseignements bibliques profonds, des œuvres de charité et
          des prédications inspirées.
        </p>
        <h1 className="text-xl text-blue-400">Conversion et Appel au Ministère</h1>
        <p>
          À l'âge de [âge], [nom du serviteur de Dieu] a connu une conversion
          radicale qui a changé le cours de sa vie. Il/elle a senti un appel
          clair pour le ministère et a commencé à prêcher l'Évangile avec une
          passion indéfectible. Ses premiers pas dans le ministère se sont faits
          dans des églises locales, où il/elle a rapidement acquis la réputation
          d'être un puissant orateur, doté d'une profonde compréhension de la
          Parole de Dieu.
        </p>
        <h1 className="text-xl text-blue-400">Accomplissements</h1>
        <p>Au cours de sa vie, [nom du serviteur de Dieu] a :</p>
        <ul className="mx-4 space-y-2 list-disc">
          <li>
            Fondé l’église/organisation [nom de l'église ou de l'organisation],
            qui est devenue un des plus grands mouvements chrétiens dans le
            pays.
          </li>
          <li>
            Écrit plusieurs ouvrages influents sur la vie chrétienne, notamment
            [nom du livre 1] et [nom du livre 2].
          </li>
          <li>
            Prêché dans de nombreux pays, touchant des vies et annonçant
            l'Évangile à travers des conférences, des croisades et des émissions
            de télévision/radio.
          </li>
          <li>
            Conduit des milliers de personnes à Christ grâce à son ministère
            d'évangélisation, et aidé à former de futurs leaders spirituels.
          </li>
        </ul>
        <h1 className="text-xl text-blue-400">Impact et Héritage</h1>
        <p>
          L'impact de [nom du serviteur de Dieu] s'étend au-delà des frontières
          de sa communauté locale. Son ministère a profondément marqué des
          générations de croyants, et son héritage continue de vivre à travers
          ses enseignements, ses disciples, et les œuvres qu'il/elle a laissées
          derrière lui/elle. Aujourd'hui, son influence est ressentie dans [nom
          du pays ou des régions], où de nombreuses personnes continuent d'être
          bénies par ses écrits et messages.
        </p>
      </div>
      <div className=" border-b-white  w-full border-b border-dashed   ">
        <h1 className=" my-5 mt-12 text-yellow-300 text-xl ">Bibliographie</h1>
      </div>
      <div className="flex flex-col space-y-4 my-10 justify-center px-24 w-full">
        <p>
          Voici une liste des principaux ouvrages et publications de [nom du
          serviteur de Dieu] :
        </p>
        <ol className="list-decimal space-y-2 mx-4">
          <li>
            [Titre du livre 1] - Publié en [année], ce livre aborde des thèmes
            sur [description du sujet ou thème principal du livre].
          </li>
          <li>
            [Articles ou sermons célèbres] - En plus des livres, [nom du
            serviteur de Dieu] a aussi écrit des articles et prêché des sermons
            importants, comme [nom de l'article/sermon], qui reste une référence
            parmi les enseignements bibliques sur [sujet du sermon].
          </li>
          <li>
            [Titre du livre 2] - Ce livre est centré sur [description], et a eu
            un fort impact parmi les lecteurs en [année de publication].
          </li>
          <li>
            [Titre du livre 3] - Dans cet ouvrage, [nom du serviteur de Dieu]
            partage des témoignages personnels et des enseignements sur [sujet
            principal], offrant des encouragements et des directives pour les
            croyants.
          </li>
        </ol>
        <div className="">
        <h1 className="text-xl mt-10 text-blue-400">Conclusion</h1>
        <p className="p-5 mt-5 rounded-md bg-[#242a34]">
          Le parcours de [nom du serviteur de Dieu] illustre une vie consacrée à
          l'œuvre de Dieu, avec une influence qui s’étend bien au-delà de sa
          propre génération. Ses enseignements continuent d’inspirer et de
          guider des croyants dans leur marche avec Dieu.
        </p>
        </div>

      </div>
    </div>
  );
};

export default Serviteurs;
//p-5 rounded-md bg-[#242a34]
