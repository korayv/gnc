const dateTimeRegex = /\d{4}[-/]\d{2}[-/]\d{2} \d{2}:\d{2}:\d{2}[:.]\d{3}/g;
const rgxPlaceholder = /\{\{(.*?)\}\}/g; //regex that takes the placeholder between the {{curly}} braces
/*
** parseLogAndGenerateSequence is accepting logContent for splitting every line
** The lines of logContent will be visited using for each and search the logEntry
*/
export const parseLogAndGenerateSequence = (logContent, logSet) => {
  const logLines = logContent.split("\n");
  let sequenceDiagramArray = [];

  logLines.forEach((logLine) => {
    logSet.forEach((logEntry) => {
      if (logLine.includes(logEntry.logline)) {
        const logData = extractDataFromLogLine(logLine);

        // Sequence note checked if contained {{curly}} and replaced if any matched item
        let updatedSequenceNote = logEntry.sequenceNote.match('{') ?
          logEntry.sequenceNote
            .replace(rgxPlaceholder, (match, key) => {
              return logData[key] ? logData[key] : `No Result for ${key}`;
            }) : logEntry.sequenceNote;

        const dateTime = dateTimeRegex.exec(logLine);
        dateTimeRegex.lastIndex = 0;
        if (dateTime == null) {
          console.log("Timestamp missing in log line: ", logLine);
        }
        sequenceDiagramArray.push({
          time: dateTime ? dateTime[0] : "Unknown Time",
          message: updatedSequenceNote + "\n"
        })

      }
    });
  });

  return sequenceDiagramArray;
};

/**
 * This method is extracting the log Sequence Note --> actor line
 */
export const parseLogSequenceNote = (sequenceNote) => {
  if (!sequenceNote) {
    // Return an empty array if sequenceNote is undefined or null
    return [];
  }

  const actors = sequenceNote.split(/-->|->/);

  if (actors.length < 2) {
    // Return an empty array if splitting does not produce at least two parts
    return [];
  }  
  const actor1 = actors[0].trim(); // Actor before the arrow
  const actor2 = actors[1].split(':')[0].trim(); // Actor after the arrow, up to the first colon

  return [actor1, actor2]; // Return the array of actors
};

const extractDataFromLogLine = (line) => {
  const rgxDynamicKey = /(\w+)\s?[=:]\s?([^\s,]+)/g;  //regex key search `=` `:` after the curly
  const keyValuePairs = {}; //Object that stores key value pairs  
  let match;

  //Iterate until a match on the the dynamic key regex in the log line 
  while ((match = rgxDynamicKey.exec(line)) !== null) {
    //Assign the captured match[2] to assign the capturedValue match[2] in the keyValuePairs
    keyValuePairs[match[1]] = match[2];
  };

  return keyValuePairs;
};
