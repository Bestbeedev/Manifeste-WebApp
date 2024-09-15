import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./Auth/Signup.jsx";
import Login from "./Auth/Login.jsx";
import Faqs from "./components/A Propos/Faqs/Faqs.jsx";
import Mission from "./components/A Propos/Mission/Mission.jsx";
import Partenaires from "./components/A Propos/Partenaires/Partenaires.jsx";
import Favoris from "./components/Activites/Favoris/Favoris.jsx";
import Historique from "./components/Activites/Historique/Historique.jsx";
import Telechargement from "./components/Activites/Telechargement/Telechargement.jsx";
import AlaUne from "./components/Enseignements/AlaUne/AlaUne.jsx";
import Populaires from "./components/Enseignements/Populaire/Populaires.jsx";
import Serviteurs from "./components/Predicateurs/Serviteurs/Serviteurs.jsx";
import Welcome from "./Pages/Welcome.jsx";
import Error404 from "./Errors/Error404.jsx";
import App from "./App.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import { UserContextProvider } from "./Context/User.Context/UserContext.jsx";
import VideoManagement from "./components/ManagementPost/VideoManagement.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error404/>,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Login />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/management-upload-videos",
        element: <VideoManagement />,
      },
      {
        path: "/about/faqs",
        element: <Faqs />,
      },
      {
        path: "/about/mission",
        element: <Mission />,
      },
      {
        path: "/about/partenariat",
        element: <Partenaires />,
      },
      {
        path: "/activities/favoris",
        element: <Favoris />,
      },
      {
        path: "/activities/historique",
        element: <Historique />,
      },
      {
        path: "/activities/telechargement",
        element: <Telechargement />,
      },
      {
        path: "/enseignements/a-la-une",
        element: <AlaUne />,
      },
      {
        path: "/enseignements/populaires",
        element: <Populaires />,
      },
      {
        path: "/predicateurs/serviteurs",
        element: <Serviteurs />,
      },
      {
        path: "/videos",
        element: <VideoPlayer />,
        children:[
          {
            path: "/videos/:videoId",
            element: <VideoPlayer />,
          },
        ]
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
