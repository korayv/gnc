import { useState } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
const Dropzone = () => {
  const [sequenceText, setSequenceText] = useState('');
  const [sequenceTime, setSequenceTime] = useState('');

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      const sequenceDiagramArray = parseLogAndGenerateSequence(fileContent); // Parsing and generating sequence diagram string
      const sequence = sequenceDiagramArray.map(item => item.message).join('');
      const sequenceTime = sequenceDiagramArray.map(item => item.time).join('');
      setSequenceText(sequence);
      setSequenceTime(sequenceTime);
    };
    reader.readAsText(files[0]);
  };

  const renderSequenceDiagram = () => {
    if (sequenceText) {
      const options = {
        theme: 'simple'
      };

      function onError(error) {
        console.log(error);
      }
      return (
        <>
          <SequenceDiagram input={sequenceTime} options={options} onError={onError} />
          <SequenceDiagram input={sequenceText} options={options} onError={onError} />
        </>
      )
    }
  };

  return (
    <div>
      <h2>Log Analyzer & Sequence Diagram Generator</h2>
      <p>Lütfen log dosyasını yükleyin.</p>

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

