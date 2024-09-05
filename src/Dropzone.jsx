import { useState, useEffect } from 'react';
import { parseLogAndGenerateSequence } from './logParser';
import SequenceDiagram from 'react-sequence-diagram';
import logSet from './log_set';

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
        <>
          <div className={{ display: 'flex', alignItems: 'flex-start' }}>
            {/* Sequence Diagram */}
            <div className={{ flex: 1, padding: '10px' }}>
              <SequenceDiagram
                input={sequenceText}
                options={options}
                onError={onError}
              />
            </div>
          </div>
        </>
      );
    }
  };

  // Function to add timestamps near the text elements in the SVG
  const addTimestampsToSvg = () => {
    const svgTexts = document.querySelectorAll('svg text'); // Select all text elements inside the SVG

    // Filter only relevant text elements based on the loglines in the logSet and exclude unwanted loglines like "XMPP"
    let eventTextElements = Array.from(svgTexts).filter(textElement => {
      return logSet.some(() => {
        return (
          !textElement.textContent.includes("XMPP") &&
          !textElement.textContent.includes("BiP Client A") &&
          !textElement.textContent.includes("Jitsi SDK A") &&
          !textElement.textContent.includes("BiP Client B") &&
          !textElement.textContent.includes("Jitsi SDK B") 
        );
      });
    });

    eventTextElements.forEach((textElement, index) => {
      const x = textElement.getAttribute('x');
      const y = textElement.getAttribute('y');

      if (x && y && sequenceTimes[index]) {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const timestampText = document.createElementNS(svgNamespace, 'text');
        timestampText.setAttribute('x', x - 0);
        timestampText.setAttribute('y', y -7);         timestampText.setAttribute('fill', 'red');  
        timestampText.setAttribute('font-size', '10'); 
        timestampText.textContent = sequenceTimes[index]; 

        textElement.parentNode.appendChild(timestampText);   }
    });
  };

  // Use effect to add timestamps after rendering the diagram
  useEffect(() => {
    if (sequenceText && sequenceTimes.length) {
      setTimeout(() => {
        addTimestampsToSvg();
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
