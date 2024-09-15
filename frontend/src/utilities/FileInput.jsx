import React, { useState } from "react";
import Buttons from "./Buttons";
import { useRef } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const FileInput = ({ content,onFileSelect }) => {
  const [fileName, setFileName] = useState("");
  const FileRef = useRef(null);

  const handleUploadFileChange = (e) => {
    console.log(FileRef.current.files);
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      const FileSrc=e.target.files[0]
      onFileSelect(FileSrc)
    } else {
      setFileName("");
    }
    
  };
  const handleClickUpload = (e) => {
    e.preventDefault();
    FileRef.current.click();
    // if(handleUploadFileChange){
    //   const FileSrc=e.target.files[0]
    //   onFileSelect(FileSrc)
    //   console.log(onFileSelect);
    // }
  };
  return (
    <div className="w-full">
      <input
        ref={FileRef}
        onChange={handleUploadFileChange}
        style={{ display: "none" }}
        accept=""
        type="file"
      />
      <Buttons
        styled={"bg-[#242a34] w-full my-3 shadow-xl hover:bg-slate-700"}
        value={content}
        onClick={handleClickUpload}
      />
      {fileName && (
        <div className="my-2 flex  space-x-2 items-center">
          <strong>
            <RiCheckboxCircleFill className="text-green-600" />
          </strong>
          <p>{fileName}</p>
        </div>
      )}
    </div>
  );
};

export default FileInput;
