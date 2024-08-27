const logSet = [
  {
    logline: "P2PCallManager handleInitiate",
    //logline: "P2PCallManager\\s+handl[A-Za-z]+/g",
    sequenceNote: "XMPP -> BiP Client A: handleInitiate(from: {{from}} callId: {{callId}})"
  },
  { 
    logline: "P2PCallEventManager sendInfo",
    sequenceNote: "BiP Client A -> XMPP: event(Conferencejoined)",
  },
  {
    logline: "CallSetupTimeHelper Call setup time took:",
    sequenceNote: "Note over BiP Client A: Call Setup  time - {{took}}",
  },
  {
    logline: "linphone_StackManager startRinging",
    sequenceNote: "BiP Client A --> Jitsi SDK A: startRinging",
  },
];
// {
//   logline: "JitsiActivity",
//   sequenceNote: "jjj",
// },

// {
//   logline: "CallAnalytics",
//   sequenceNote: "ccc",
// },


export default logSet;
