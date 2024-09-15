import React, { useEffect, useState } from "react";
import Buttons from "../../utilities/Buttons";
import useFocus from "../../Hooks/UseFocus";
import FileInput from "../../utilities/FileInput";
import { toast } from "react-toastify";

const VideoManagement = () => {
  const [title, SetTitle] = useState("");
  const { span1, span2, Input1, Input2 } = useFocus();
  const [optionCategory, setOptionCategory] = useState([
    {
      id: 1,
      isActive: false,
      value: "Aucune catégorie sélectionnée",
      category: "Aucune",
    },
    { id: 2, isActive: false, value: "Enseignement Biblique", category: "EB" },
    { id: 3, isActive: false, value: "Prières", category: "PR" },
    { id: 4, isActive: false, value: "Exhortations ", category: "EXB" },
    { id: 5, isActive: false, value: "Retraite Spirituelle", category: "RS" },
  ]);
  const [checked, setChecked] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);




  const handleFileSelectMini = (fileObject) => {
    setVideoFile(fileObject);
  };
  const handleFileSelectVid = (fileObject) => {
    setThumbnailFile(fileObject);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      thumbnailFile,
      videoFile,
      checked
    };
    console.log(newPost);
    const formData=new FormData()
    formData.append('title',title)
    // formData.append('thumbnailFile',thumbnailFile)
    // formData.append('videoFile',videoFile)
    // formData.append('checked',checked)
    console.log(formData);
    try {
      const response= await fetch("http://localhost:5000/upload",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:formData
      })
      if(!response.ok){
        toast.error('Non envoyer')
        throw new Error('Formulaire non envoyer')
      }else{
        toast.success("Enregistrer avec succès")
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] rounded-lg shadow-2xl  mx-auto my-16 h-fit flex flex-col px-8 py-8 bg-[#1c2029]"
      >
        <h1 className="text-xl title mb-3">Publication de la video</h1>
        <span ref={span1} className="my-2 bg-[#242a34]  rounded-md p-3">
          <input
            ref={Input1}
            value={title}
            onChange={(e) =>
              SetTitle(
                e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1).toLowerCase()
              )
            }
            className="border-none text-white w-full  outline-none bg-transparent"
            type="text"
            placeholder="Titre de la video"
          />
        </span>
        <span>
          <FileInput
            onFileSelect={handleFileSelectMini}
            content={"Uploader la miniature"}
          />
        </span>
        <span>
          <FileInput
            onFileSelect={handleFileSelectVid}
            content={"Uploader la video"}
          />
        </span>

        <span>
          <select
            ref={span2}
            className="my-2  w-full outline-none bg-[#242a34] rounded-md p-3"
            name="category"
            value={checked}
            id="category"
            onChange={(e) => setChecked(e.target.value)}
          >
            {optionCategory.map((option) => (
              <option ref={Input2} value={option.category} key={option.id}>
                {option.value}
              </option>
            ))}
          </select>
        </span>

        <Buttons
          styled={"buttonStart w-full my-3 shadow-xl hover:bg-blue-400"}
          value={"Soumettre"}
        />
      </form>
    </>
  );
};

export default VideoManagement;
