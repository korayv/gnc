import logSet from "./log_set";
/*
**parseLogAndGenerateSequence is accepting logContent for splitting every line
**The lines of logContent will be visited using for each and search the logEntry
*/
export const parseLogAndGenerateSequence = (logContent) => {
  const lines = logContent.split("\n");
  let sequenceDiagramText = "";
  //forEach iterates over every line on the log file to find the logline written in json
  lines.forEach((line) => { //o(n)
    logSet.forEach((logEntry) => {
      const logLineRegex = new RegExp(logEntry.logline[0], "g");
      /*
      **Checks the logLineRegex from the logSet is not null
      */
      if (logLineRegex.exec(line) !== null) {
        const rgxPlaceholder = /\{\{(.*?)\}\}/g; //regex that takes the placeholder between the curly braces
        const rgxDynamicKey = /(\w+)\s?:\s?([^\s,]+)/g; //regex key for with the dynamic approach after the curly  

        const extractDataFromLogLine = (line) => {
          const keyValuePairs = {}; //Object that stores key value pairs  
          let match;
          //Iterate until a match on the the dynamic key regex in the log line 
          while ((match = rgxDynamicKey.exec(line)) !== null) {
            //Assigning the captured match[2] to assign the capturedValue match[2] in the keyValuePairs
            keyValuePairs[match[1]] = match[2];
          }
          return keyValuePairs; //return the object contains the key-value pairs
        };
        const logData = extractDataFromLogLine(line); //Extracted data from the logLine
        //sequence note is updated and replaced  with the rgxPlaceHolder with the matched item
        const updatedSequenceNote = logEntry.sequenceNote.replace( 
          rgxPlaceholder,
          (match, key) => {
            return logData[key] ? logData[key] : `No Result for ${key}`;
          }
        );

        sequenceDiagramText += updatedSequenceNote + " \n";
      }
    });
  });

  return sequenceDiagramText;
};
