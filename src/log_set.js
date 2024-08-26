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
  // {
  //   logline: "CallSetupTimeHelper Call setup time took:",
  //   sequenceNote: "Note over BiP Client A: Call Setup  time - {{took}}",
  // },
];
// {
//   logline: "JitsiActivity",
//   sequenceNote: "jjj",
// },

// {
//   logline: "CallAnalytics",
//   sequenceNote: "ccc",
// },
//<title id="title">Green rectangle</title>
//<rect width="75" height="50" rx="20" ry="20" fill="#90ee90" stroke="#228b22" stroke-fill="1" />

export default logSet;
