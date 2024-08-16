import logSet from "./log_set";

export const parseLogAndGenerateSequence = (logContent) => {
  const lines = logContent.split("\n");
  let sequenceDiagramText = "";

  lines.forEach((line) => {
    logSet.forEach((logEntry) => {
      if (line.includes(logEntry.logline)) {
        sequenceDiagramText += logEntry.sequenceNote +' \n';
      }
    });
    // if (
    //   line.includes('P2PCallManager') ||
    //   line.includes('P2PCallEventManager') ||
    //   line.includes('JitsiViewModel') ||
    //   line.includes('ExternalAPI') ||
    //   line.includes('tag:JitsiActivity') ||
    //   line.includes('tag:CallAnalytics') &&
    //   !line.includes('tag:VRI')
    // ) {
    //   if (line.includes('Start Call')) {
    //     sequenceDiagramText += 'Note over BiP Client A: Start Call\n';
    //   }
    //   if (line.includes('OutgoingCall UI')) {
    //     sequenceDiagramText += 'Note over BiP Client A: OutgoingCall UI\n';
    //   }
    //   if (line.includes('join')) {
    //     sequenceDiagramText += 'Jitsi Client A -> BiP Jitsi Backend: join(tokenA, roomName)\n';
    //   }
    //   if (line.includes('Conferencejoined')) {
    //     sequenceDiagramText += 'Jitsi Client A -> BiP Client A: event(Conferencejoined)\n';
    //   }
    //   if (line.includes('Ringing')) {
    //     sequenceDiagramText += 'BiP Client A -> Jitsi SDK A: event(Ringing)\n';
    //   }
    //   if (line.includes('Accept Call')) {
    //     sequenceDiagramText += 'Note over BiP Client B: Accept Call\n';
    //   }
    //   if (line.includes('sendInfo')) {
    //     sequenceDiagramText += 'BiP Client A -> XMPP: event(Conferencejoined)\n';
    //   }
    // }
  });

  return sequenceDiagramText;
};
