const logSet = [
  {
    logline: "P2PCallManager handleInitiate", 
    sequenceNote:
      "XMPP -> BiP Client A: handleInitiate(from: {{from}}, callId : {{callId}})",
  },
  {
    logline: "P2PCallEventManager sendInfo",
    sequenceNote: "BiP Client A -> XMPP: event(Conferencejoined)",
  },
  {
    logline: "CallSetupTimeHelper Call",
    sequenceNote: "Note over BiP Client A: Call Setup",
  },
  {
    logline: "JitsiActivity",
    sequenceNote: "",
  },

  {
    logline: "CallAnalytics",
    sequenceNote: "",
  },
];

export default logSet;
