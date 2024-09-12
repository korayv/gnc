import { parseLogSequenceNote } from './logParser';
import logSet from './log_set';
/**
 * Function to add timestamps near the text elements in the SVG
 */
export const addTimestampsToSvg = (sequenceTimes) => {
  const svgTexts = document.querySelectorAll('svg text'); // Select all text elements inside the SVG

  // Filter the actor elements from timeline printing
  let eventTextElements = Array.from(svgTexts).filter(textElement => {
    return !logSet.some(log => {
      const actors = parseLogSequenceNote(log.sequenceNote); // Get both actors as an array
      return actors.some(actor => textElement.textContent.includes(actor)); // Exclude if text contains any actor
    });
  });

  eventTextElements.forEach((textElement, index) => {
    const x = textElement.getAttribute('x');
    const y = textElement.getAttribute('y');

    if (x && y && sequenceTimes[index]) {
      const svgNamespace = "http://www.w3.org/2000/svg";
      const timestampText = document.createElementNS(svgNamespace, 'text');
      timestampText.setAttribute('x', x - 0);
      timestampText.setAttribute('y', y - 7);
      timestampText.setAttribute('fill', 'red');
      timestampText.setAttribute('font-size', '10');
      timestampText.textContent = sequenceTimes[index];

      textElement.parentNode.appendChild(timestampText);
    }
  });
};