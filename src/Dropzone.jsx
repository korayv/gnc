import PropTypes from 'prop-types';  
import { useState, useEffect } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
import { addTimestampsToSvg } from './Timestamp';
import './Dropzone.css';

const Dropzone = ({ logSet }) => {
  const [sequenceText, setSequenceText] = useState('');
  const [sequenceTimes, setSequenceTimes] = useState([]);
  const [isUpload, setIsUpload] = useState(false);

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      try {
        // Parse JSON content and generate sequence diagram
        const sequenceDiagramArray = parseLogAndGenerateSequence(fileContent, logSet);
        setIsUpload(true);  // Set to true only if file is uploaded successfully

        const sequence = sequenceDiagramArray.map(item => item.message).join('');
        const times = sequenceDiagramArray.map(item => item.time); // Use timestamps parsed from the log file
        setSequenceText(sequence);
        setSequenceTimes(times);
      } catch (error) {
        console.error('Error parsing the log file:', error);
        alert("Geçersiz log dosyası. Lütfen JSON formatında bir dosya yükleyin.");
      }
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
        <div className='layout'>
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

  useEffect(() => {
    if (sequenceText && sequenceTimes.length) {
      setTimeout(() => {
        addTimestampsToSvg(sequenceTimes);
      }, 500); //small delay to ensure SVG rendering is completed
    }
  }, [sequenceText, sequenceTimes]);

  return (
    <div>
      <h4>Lütfen log dosyasını yükleyin.</h4>
      <input className='dropzone-area' type="file" onChange={(e) => handleFiles(e.target.files)} />
      {sequenceText && (
        <div>
          <h3>File Content: {isUpload ? "Uploaded file" : "Default file"}</h3>
        </div>
      )}

      <div className="diagramContainer"></div>

      {renderSequenceDiagram()}
    </div>
  );
};

Dropzone.propTypes = {
  logSet: PropTypes.arrayOf(PropTypes.object).isRequired, // Ensure
};

export default Dropzone;