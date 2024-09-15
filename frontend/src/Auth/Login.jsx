import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../utilities/Buttons";
import useFocus from "../Hooks/UseFocus";
import { UserContext } from "../Context/User.Context/UserContext";
import { ValidMail } from "./VerifiedForm/ValidMail";
import { toast } from "react-toastify";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

//josueaoga0@gmail.com
const Login = () => {
  const [mail, SetMail] = useState("");
  const [password, SetPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(false);

  const { span1, span2, Input1, Input2 } = useFocus();
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const validateFormulaire = () => {
    if (!mail || !password) {
      toast.warning("Remplissez toutes les champs");
      return false;
    }
    const testMail = ValidMail(mail);
    if (!testMail) {
      toast.warning("Veuillez entrez une adresse email valide");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = validateFormulaire();
    if (validate) {
      try {
        const response = await fetch("http://localhost:5000/users");
        const users = await response.json();

        const user = users.find(
          (user) => user.mail === mail && user.password === password
        );

        if (user) {
          loginUser({
            id: user.id,
            name: user.name,
            email: user.mail,
            role:user.role
          });
          navigate("/enseignements/a-la-une");
        } else {
          toast.error("Email ou mot de passe incorrect.");
        }
      } catch (error) {
        console.error("Erreur lors de la connexion au serveur:", error);
        toast.error("Erreur lors de la connexion. Veuillez réessayer.");
      }
    }
  };

  return (
    <>
      <form
        className="w-[70%] rounded-lg shadow-2xl mx-auto my-20 h-fit 
        flex flex-col px-8 py-8 bg-[#1c2029] "
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl title mb-3">Connexion</h1>
        <span ref={span1} className={` my-2 bg-[#242a34] rounded-md p-3`}>
          <input
            ref={Input1}
            value={mail}
            onChange={(e) => SetMail(e.target.value)}
            className="border-none text-white w-full outline-none bg-transparent"
            type="text"
            placeholder="Email"
          />
        </span>

        <span
          ref={span2}
          className={`flex items-center my-2 bg-[#242a34] rounded-md p-3`}
        >
          <input
            ref={Input2}
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
