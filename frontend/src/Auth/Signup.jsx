import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../utilities/Buttons";
import { useState } from "react";
import useFocus from "../Hooks/UseFocus";
import UserContext from "../Context/User.Context/UserContext";
import { ValidMail } from "./VerifiedForm/ValidMail";
import { toast } from "react-toastify";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
const Signup = () => {
  const [name, SetName] = useState("");
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");
  const [isEmailTaken, setIsEmailTaken] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const { span1, span2, span3, Input1, Input2, Input3 } = useFocus();
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const validateFormulaire = () => {
    if (!mail || !password || !name) {
      toast.warning("Remplissez toutes les champs ");
      return false;
    }
    const testMail = ValidMail(mail);
    if (!testMail) {
      console.log("Value>>", testMail);
      toast.error("Veuillez entrez une adresse email valide");
      return false;
    }
    return true;
  };
  const checkEmailAvailability = async (email) => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      const isTaken = users.some((user) => user.mail === email);
      setIsEmailTaken(isTaken);
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email:", error);
      toast.error("Erreur lors de la vérification de l'email.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailTaken) {
      toast.error("Cet email est déjà utilisé.");
      return;
    }
    const validate = validateFormulaire();
    if (validate) {
      const newUser = {
        name,
        mail,
        password,
        role:'user'
      };
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        if (!response.ok) {
          throw new Error("Erreur lors de l'inscription");
        }
        const data = await response.json();
        toast.success("Connexion avec success");
        navigate("/enseignements/a-la-une");
      } catch (error) {
        toast.warning("Erreur lors de l'inscription : " + error.message);
      }
      const userInfo = { name, mail, role:'user' };
      loginUser(userInfo);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[70%] rounded-lg shadow-2xl  mx-auto my-20 h-fit flex flex-col px-8 py-8 bg-[#1c2029]"
      >
        <h1 className="text-xl title mb-3">Inscription</h1>
        <span ref={span1} className="my-2 bg-[#242a34]  rounded-md p-3">
          <input
            ref={Input1}
            value={name}
            onChange={(e) =>
              SetName(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1).toLowerCase()
              )
            }
            className="border-none text-white w-full  outline-none bg-transparent"
            type="text"
            placeholder="Nom d'utlisateur"
          />
        </span>
        <span ref={span2} className="my-2 bg-[#242a34] rounded-md p-3">
          <input
            ref={Input2}
            value={mail}
            onChange={(e) => {
              SetMail(e.target.value);
              checkEmailAvailability(e.target.value); // Vérifier la disponibilité de l'email
            }}
            className="border-none text-white w-full outline-none bg-transparent"
            type="text"
            placeholder="Email"
          />
        </span>
        <span
          ref={span3}
          className="my-2 flex items-center  bg-[#242a34] rounded-md p-3"
        >
          <input
            ref={Input3}
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            className="border-none text-white w-full outline-none bg-transparent"
            type={hidePassword ? "password" : "text"}
            placeholder="Mot de passe"
          />
          {hidePassword ? (
            <RiEyeOffFill
              className="cursor-pointer"
              onClick={() => setHidePassword(!hidePassword)}
            />
          ) : (
            <RiEyeFill
              className="cursor-pointer"
              onClick={() => setHidePassword(!hidePassword)}
            />
          )}
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
    </>
  );
};

export default Signup;
