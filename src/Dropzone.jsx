import { useState, useEffect } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
import { addTimestampsToSvg } from './Timestamp';
import './Dropzone.css';
import DropzoneArea from './DropzoneArea';
import PropTypes from 'prop-types';

const Dropzone = ({ logSet }) => {
  const [sequenceText, setSequenceText] = useState('');
  const [sequenceTimes, setSequenceTimes] = useState([]);
  const [isProcessed, setIsProcessed] = useState(false);
  const [logFileProcess, setLogFileProcess] = useState('');
  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileContent = e.target.result;
      try {
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
        alert("Geçersiz log dosyası. Lütfen txt formatında bir log dosyası yükleyin.");
        setIsProcessed(false);
        setLogFileProcess(''); // Reset on error
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
    <DropzoneArea onFilesDrop={handleFiles} />
    {sequenceText && (
      <div>
      </div>
    )}

    <div className="diagramContainer"></div>
    {renderSequenceDiagram()}
  </div>
);
};
Dropzone.propTypes = {
  logSet: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Dropzone;


