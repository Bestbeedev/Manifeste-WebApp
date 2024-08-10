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
        className="w-[70%] rounded-lg shadow-2xl mx-auto my-20 h-fit flex flex-col px-8 py-8 bg-[#141c30bf] "
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl title mb-3">Connexion</h1>
        <span className="my-2 hover:border border-blue-700  bg-slate-900 rounded-md p-3">
          <input
            value={mail}
            onChange={(e)=>SetMail(e.target.value)}
            className="border-none text-white w-full outline-none bg-transparent"
            type="text"
            placeholder="Email"
          />
        </span>
        <span className="my-2 hover:border border-blue-700  bg-slate-900 rounded-md p-3">
          <input
            value={password}
            onChange={(e)=>SetPassword(e.target.value)}
            className="border-none text-white w-full outline-none bg-transparent"
            type="password"
            placeholder="Mot de passe"
          />
        </span>
        <Link to="/">
          <Buttons
            styled={"buttonStart w-full my-3 shadow-xl hover:bg-green-400"}
            value={"Soumettre"}
          />
        </Link>
        <span className="mt-2">
          Pas encore de compte{" "}
          <Link className="font-medium  text-yellow-400" to="/signup">
            Inscrivez-vous
          </Link>
        </span>
      </form>
    </>
  );
};

export default Login;
