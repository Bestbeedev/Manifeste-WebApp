import React, { useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../utilities/Buttons";
const Login = () => {
  
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <>
      <form
        className="w-[40vw] rounded-lg shadow-xl  mx-auto my-20 h-fit flex flex-col px-8 py-8 loginBg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl mb-3">Connexion</h1>
        <span className="my-2 bg-slate-200 rounded-md p-3">
          <input
            value={mail}
            onChange={(e)=>SetMail(e.target.value)}
            className="border-none text-slate-800 w-full outline-none bg-transparent"
            type="text"
            placeholder="Email"
          />
        </span>
        <span className="my-2  bg-slate-200 rounded-md p-3">
          <input
            value={password}
            onChange={(e)=>SetPassword(e.target.value)}
            className="border-none text-slate-800 w-full outline-none bg-transparent"
            type="password"
            placeholder="Mot de passe"
          />
        </span>
        <Link to="/">
          <Buttons
            styled={"buttonStart w-full my-3 shadow-xl hover:bg-green-400"}
            value={"Commencez maintenant"}
          />
        </Link>
        <span className="mt-2">
          Pas encore de compte{" "}
          <Link className="font-medium text-yellow-400" to="/signup">
            Inscrivez-vous
          </Link>
        </span>
      </form>
    </>
  );
};

export default Login;
