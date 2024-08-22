const logSet = [
  {
    // logline: "/P2PCallManager handleInitiate/g",
    logline: "/P2PCallManager\\s+handl[A-Za-z]+/g",
    sequenceNote:
      "XMPP -> BiP Client A: handleInitiate(from: {{from}})",
  },
//   {
//     logline: "P2PCallEventManager sendInfo",
//     sequenceNote: "BiP Client A -> XMPP: event(Conferencejoined)",
//   },
//   {
//   logline: "CallSetupTimeHelper Call",
//   sequenceNote: "Note over BiP Client A: Call Setup",
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

export default logSet;
