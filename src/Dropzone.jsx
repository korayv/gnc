import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
import { addTimestampsToSvg } from './Timestamp';
import './Dropzone.css';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Dropzone = ({ logSet }) => {
  const [sequenceText, setSequenceText] = useState('');
  const [sequenceTimes, setSequenceTimes] = useState([]);

  const handleFileContent = (fileContent) => {
    try {
      // Parse JSON content and generate sequence diagram
      const sequenceDiagramArray = parseLogAndGenerateSequence(fileContent, logSet);

      const sequence = sequenceDiagramArray.map(item => item.message).join('');
      const times = sequenceDiagramArray.map(item => item.time); // Use timestamps parsed from the log file
      setSequenceText(sequence);
      setSequenceTimes(times);
    } catch (error) {
      console.error('Error parsing the log file:', error);
      alert("Geçersiz log dosyası. Lütfen JSON formatında bir dosya yükleyin.");
    }
  };

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      handleFileContent(e.target.result);
    };
    reader.readAsText(files[0]);
  };

  const onDrop = useCallback((acceptedFiles) => {
    handleFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
        style={dropzoneStyle}
      >
        <input {...getInputProps()} className='dropzone-input' />
        <div className="icon-container">
          <FontAwesomeIcon icon={faUpload} size="4x" />
          <p>
            {isDragActive ? 'Dosyayı bırakın...' : 'Dosyaları sürükleyin veya yüklemek için tıklayın'}
          </p>
        </div>
      </div>

      {sequenceText && (
        <div>
          <h3>Visual Output</h3>
          <div className="diagramContainer">{renderSequenceDiagram()}</div>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

Dropzone.propTypes = {
  logSet: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropzone;
