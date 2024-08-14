import { useCallback, useRef, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import 'material-symbols'
import "./Dropzone.css"
const Dropzone = () => {
  const inputRef = useRef();

  //State variables for the information related to the files 
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select"); //select | uploading | done

  /// Handling the file change
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0){
      setSelectedFile(event.target.files[0]);
    }
  }

// Trigger func to file input dialog
const onChooseFile = () => {
  inputRef.current.click();
}
//Function to clear the file input
const clearFileInput = () =>  {
  inputRef.current.value = "";
  setSelectedFile(null);
  setProgress(0);
  setUploadStatus("select");
}
  return (
      <div>
         {/* Imput file */}
        <input type="file" ref={inputRef} onChange={handleFileChange} style={{display: "none"}} />
        
        {/* Analyze the file button */}
        {!selectedFile && (
        <>
        <button className='file-btn'  onClick={onChooseFile}>
          <span className="material-symbols-outlined">upload_file</span>
          Load File & Analyze
        </button>
        </>
        )}

        {/*Displaying the information and progress when a file is selected */}
        {selectedFile && (
        <>
          <div className="file-card">
            <span className="material-symbols-outlined icon">
              description
            </span>
            <div className="file-info">
              <div style ={{flex: 1}}>
                <h6>{selectedFile.name}</h6>
                <div className="progress-bg">
                  <div className="progress" style={{ width:`40%`}} />
                </div>
                <button onClick={clearFileInput}>
                  <span className="material-symbols-outlined close-icon">
                    close
                  </span>
                </button>
              </div>
            </div>
            </div>
        </>
  
     )}
  </div>
);
};

export default Dropzone;