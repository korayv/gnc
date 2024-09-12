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
  const [isProcessed, setIsProcessed] = useState(false); // New state to track processing status
  const [logFileProcess, setLogFileProcess] = useState('');



  const handleFileContent = (fileContent) => {
    try {
      // Simulate file processing
      setIsProcessed(false);
      setLogFileProcess('Dosya işleniyor');

      const intervalId = setInterval(() => {
        setLogFileProcess((prev) => {
          if (prev === 'Dosya işleniyor...') return 'Dosya işleniyor';
          return prev + '.';
        });
      }, 200); 

      // Parse JSON content and generate sequence diagram
      const sequenceDiagramArray = parseLogAndGenerateSequence(fileContent, logSet);

      const sequence = sequenceDiagramArray.map(item => item.message).join('');
      const times = sequenceDiagramArray.map(item => item.time); // Use timestamps parsed from the log file
      setSequenceText(sequence);
      setSequenceTimes(times);

      setTimeout(() => {
        clearInterval(intervalId); // Stop the "Dosya işleniyor" animation after processing is done
        setLogFileProcess('');
        setIsProcessed(true); // Mark as processed
      }, 2000); 
    } catch (error) {
      console.error('Error parsing the log file:', error);
      alert("Geçersiz log dosyası. Lütfen JSON formatında bir dosya yükleyin.");
      setIsProcessed(false);
      setLogFileProcess(''); // Reset on error
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
        style={isDragActive ? activeStyle : dropzoneStyle} // Change the style based on isDragActive
      >
        <input {...getInputProps()} className='dropzone-input' />
        <div className="icon-container">
          <FontAwesomeIcon icon={faUpload} size="4x" />
          <p>
            {isDragActive ? 'Dosyayı bırakın...' : 'Dosyayı sürükleyin veya yüklemek için tıklayın'}
          </p>
        </div>
      </div>
      {
        logFileProcess && (
          <div>
            <p>{logFileProcess}</p>
          </div>

        )}

      {isProcessed && ( //Display sequence diagram when processed
        <div>
          <div className="diagramContainer">{renderSequenceDiagram()}</div>
        </div>
      )}
    </div>
  );
};

Dropzone.propTypes = {
  logSet: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropzone;

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '10px',
  padding: '20px',
  backgroundColor: 'aliceBlue',
  textAlign: 'center',
  cursor: 'pointer',
};

const activeStyle = {
  ...dropzoneStyle,
  backgroundColor: 'lightyellow', // Updated color when dragging
  border: '2px solid green',
};
