import { useState } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
const Dropzone = () => {
  const [sequenceText, setSequenceText] = useState('');

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileContent = e.target.result;
      const sequence = parseLogAndGenerateSequence(fileContent); // Parsing and generating sequence diagram string
      
      setSequenceText(sequence);
    };
    reader.readAsText(files[0]);
  };

  const renderSequenceDiagram = () => {
    if (sequenceText) {
      // const diagram = SequenceDiagram.parse(sequenceText);
      // diagram.drawSVG('diagramContainer', { theme: 'simple' }); 
      const options = {
        theme: 'simple'
      };

      function onError(error) {
        console.log(error);
      }
      return <SequenceDiagram input={sequenceText} options={options} onError={onError} />
    }
  };

  return (
    <div>
      <h2>Log Analyzer & Sequence Diagram Generator</h2>
      <input type="file" onChange={(e) => handleFiles(e.target.files)} />
      {sequenceText && (
        <div>
          <h3>File Content:</h3>
          {/* <pre>{sequenceText}</pre> */}
        </div>
      )}

      <div id="diagramContainer" style={{ marginTop: '20px' }}></div>

      {renderSequenceDiagram()}
    </div>
  );
};

export default Dropzone;




// import 'material-symbols'
// import "./Dropzone.css"
// const Dropzone = () => {
//   const inputRef = useRef();

//   //State variables for the information related to the files 
//   const [selectedFile, setSelectedFile] = useState(null);

//   /// Handling the file change
//   const handleFileChange = (event) => {
//     if (event.target.files && event.target.files.length > 0){
//       setSelectedFile(event.target.files[0]);
//       function previewFiles(){  
//         const content = document.querySelector(".content");
//         const [file] = document.querySelector("input[type=file]").files;
//         const reader = new FileReader();
      
//         reader.addEventListener(
//           "load",
//           () => {
//             // this will then display a text file
//             content.innerText = reader.result;
//           },
//           false,
//         );
      
//         if (file) {
//           reader.readAsText(file);
//         }
//       }
//       previewFiles();
//         }
//   }

// // Trigger func to file input dialog
// const onChooseFile = () => {
//   inputRef.current.click();
// }
// //Function to clear the file input
// const clearFileInput = () =>  {
//   inputRef.current.value = "";
//   setSelectedFile(null);
// }
//   return(
//       <div>
//          {/* Imput file */}
//         <input type="file" ref={inputRef} onChange={handleFileChange} style={{display: "none"}} />
        
//         {/* Analyze the file button */}
//         {!selectedFile && (
//         <>
//         <button className='file-btn'  onClick={onChooseFile}>
//           <span className="material-symbols-outlined">upload_file</span>
//           Load File & Analyze
//         </button>
//         </>
//         )}

//         {/*Displaying the information and progress when a file is selected */}
//         {selectedFile && (
//         <>
//           <div className="file-card">
//             <span className="material-symbols-outlined icon">
//               description
//             </span>
//             <div className="file-info">
//               <div style ={{flex: 1}}>
//                 <h6>{selectedFile.name}</h6>  
          
//                 <div className="progress-bg">
//                   <div className="progress" style={{ width:`40%`}} />
//                 </div>
//                 <button onClick={clearFileInput}>
//                   <span className="material-symbols-outlined close-icon">
//                     close
//                   </span>
//                 </button>
//               </div>
//             </div>
//             </div>
//         </>
//      )}
//   </div>
// );
// };

// export default Dropzone;