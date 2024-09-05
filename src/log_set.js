const logSet = [
  {
    logline: "P2PCallManager handleInitiate",
    sequenceNote: "{{from}} -> BiP Client A: handleInitiate(from: {{from}} callId: {{callId}})"
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

export default logSet;
