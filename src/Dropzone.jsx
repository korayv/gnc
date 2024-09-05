import { useState, useEffect } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
import { addTimestampsToSvg } from './Timestamp';

const Dropzone = () => {
  const [sequenceText, setSequenceText] = useState('');
  const [sequenceTimes, setSequenceTimes] = useState([]);

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      const sequenceDiagramArray = parseLogAndGenerateSequence(fileContent); // Parsing and generating sequence diagram string

      const sequence = sequenceDiagramArray.map(item => item.message).join('');
      const times = sequenceDiagramArray.map(item => item.time); // Use timestamps parsed from the log file
      setSequenceText(sequence);
      setSequenceTimes(times);
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
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          {/* Sequence Diagram */}
          <div style={{ flex: 1, padding: '10px' }}>
            <SequenceDiagram
              input={sequenceText}
              options={options}
              onError={onError}
            />
          </div>
        </div>
      );
    }
  };

  // Use effect to add timestamps after rendering the diagram
  useEffect(() => {
    if (sequenceText && sequenceTimes.length) {
      setTimeout(() => {
        addTimestampsToSvg(sequenceTimes);
      }, 500); // Adding a small delay to ensure SVG rendering is completed
    }
  }, [sequenceText, sequenceTimes]);

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

      <div className="diagramContainer"></div>

      {renderSequenceDiagram()}
    </div>
  );
};

export default Dropzone;