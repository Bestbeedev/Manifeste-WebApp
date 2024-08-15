import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../utilities/Buttons";
import { useState } from "react";
import useFocus from "../Hooks/UseFocus";
const Signup = () => {
  
  const [name, SetName] = useState("");
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");

  const {span1,span2,span3,Input1,Input2,Input3}=useFocus()
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    navigate('/enseignements/a-la-une')
    e.prevent.default();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] rounded-lg shadow-2xl  mx-auto my-20 h-fit flex flex-col px-8 py-8 bg-[#141c30bf]"
    >
      <h1 className="text-xl title mb-3">Inscription</h1>
      <span ref={span1} className="my-2 bg-slate-900  rounded-md p-3">
        <input
        ref={Input1}
          value={name}
          onChange={(e)=>SetName(e.target.value)}
          className="border-none text-white w-full  outline-none bg-transparent"
          type="text"
          placeholder="Nom d'utlisateur"
        />
      </span>
      <span ref={span2} className="my-2 bg-slate-900   rounded-md p-3">
        <input
        ref={Input2}
          value={mail}
          onChange={(e)=>SetMail(e.target.value)}
          className="border-none text-white w-full outline-none bg-transparent"
          type="text"
          placeholder="Email"
        />
      </span>
      <span ref={span3} className="my-2  bg-slate-900 rounded-md p-3">
        <input
        ref={Input3}
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}
          className="border-none text-white w-full outline-none bg-transparent"
          type="password"
          placeholder="Mot de passe"
        />
      </span>
        <Buttons
          styled={"buttonStart w-full my-3 shadow-xl hover:bg-green-400"}
          value={"Soumettre"}
        />
      <span className="mt-2">
        Avez-vous deja un compte?{" "}
        <Link className="font-medium text-yellow-400" to="/login">
          Connectez-vous
        </Link>
      </span>
    </form>
  );
};

export default Signup;
