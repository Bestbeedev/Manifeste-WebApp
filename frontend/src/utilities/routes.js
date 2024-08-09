import Faqs from "../components/A Propos/Faqs/Faqs";
import Mission from "../components/A Propos/Mission/Mission";
import Partenaires from "../components/A Propos/Partenaires/Partenaires";
import Favoris from "../components/Activites/Favoris/Favoris";
import Historique from "../components/Activites/Historique/Historique";
import Telechargement from "../components/Activites/Telechargement/Telechargement";
import AlaUne from "../components/Enseignements/AlaUne/AlaUne";
import Populaires from "../components/Enseignements/Populaire/Populaires";
import Serviteurs from "../components/Predicateurs/Serviteurs/Serviteurs";

 const routes=[
    {
        path:'/dashboard/a-la-une',
        element:<AlaUne/>
    }
    // {
    //     path:'/dashboard/populaires',
    //     element:<Populaires/>
    // },
    // {
    //     path:'/dashboard/serviteurs',
    //     element:<Serviteurs/>
    // },
    // {
    //     path:'/dashboard/historique-de-lecture',
    //     element:<Historique/>
    // },
    // {
    //     path:'/dashboard/favoris',
    //     element:<Favoris/>
    // },
    // {
    //     path:'/dashboard/telechargement',
    //     element:<Telechargement/>
    // },
    // {
    //     path:'/dashboard/notre-mission',
    //     element:<Mission/>
    // },
    // {
    //     path:'/dashboard/partenaires',
    //     element:<Partenaires/>
    // },
    // {
    //     path:'/dashboard/a-la-une',
    //     element:<Faqs/>
    // }
]
export default routes
