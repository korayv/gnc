import logSet from "./log_set";
export const parseLogAndGenerateSequence = (logContent) => {
  const lines = logContent.split("\n");
  let sequenceDiagramText = "";

  lines.forEach((line) => {
    logSet.forEach((logEntry) => {
      if (line.includes(logEntry.logline)) {
        const rgxFrom = /from :\s?(\d+)/
        const rgxcallId = /callId :\s?(\w+)/
        // const rgxDynamic = /{from} : \s?(\d+)/;
        const fromMatch = line.match(rgxFrom); 
        const callIdMatch = line.match(rgxcallId)

        const fromMatchNullable = fromMatch ? fromMatch[1] : "No Result on From";
        const callIdMatchNullable = callIdMatch ? callIdMatch[1] : "No Result on callId";
        const updatedSequenceNote = logEntry.sequenceNote
        .replace("{{from}}", fromMatchNullable)
        .replace("{{callId}}", callIdMatchNullable);

        sequenceDiagramText += updatedSequenceNote + " \n";
      }
    });
  });

  return sequenceDiagramText;
};


