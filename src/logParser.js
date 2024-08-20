import logSet from "./log_set";

export const parseLogAndGenerateSequence = (logContent) => {
  const lines = logContent.split("\n");
  let sequenceDiagramText = "";

  lines.forEach((line) => {
    logSet.forEach((logEntry) => {
      const logLineRegex = new RegExp(logEntry.logline[0], "g");

      if (logLineRegex.exec(line) !== null) {
        const rgxDynamicKey = /(\w+)\s?:\s?([^\s,]+)/g;
        const rgxPlaceholder = /\{\{(.*?)\}\}/g;

        const extractDataFromLogLine = (line) => {
          const keyValuePairs = {};
          let match;
          while ((match = rgxDynamicKey.exec(line)) !== null) {
            keyValuePairs[match[1]] = match[2];
          }
          return keyValuePairs;
        };

        const logData = extractDataFromLogLine(line);
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
