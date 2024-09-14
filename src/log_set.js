const logSet = [
  {
    logline: "P2PCallManager handleInitiate",
    sequenceNote: "XMPP -> BiP Client A: handleInitiate(from: {{from}} callId: {{callId}})"
  },
  {
    logline: "VoIPSDK Call event received:",
    sequenceNote: "XMPP -> BiP Client A: Call event received(reason: {{reason}} callState: {{callState}})"
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
    logline: "P2PCallEventManager Ringing",
    sequenceNote: "BiP Jitsi Backend -> BiP Client B: Info(state=Ringing, Session: {{sessionId}})"
  },
  {
    logline: "Incoming call UI",
    sequenceNote: "Note over BiP Client B: Incoming Call UI"
  },
  {
    logline: "AnswerTimer started",
    sequenceNote: "Note over BiP Client A: Answer Timer Started"
  },
  {
    logline: "ringingTimer started",
    sequenceNote: "Note over BiP Client B: Ringing Timer Started"
  },
  {
    logline: "P2PCallEventManager sendInitiate successfully finished",
    sequenceNote: "Note over BiP Client A: sendInitiate successfully finished)"
  },
  {
    logline: "Conference media established",
    sequenceNote: "Jitsi SDK A -> BiP Client A: event(MediaEstablished)"
  },
  {
    logline: "Call state ended",
    sequenceNote: "BiP Jitsi Backend -> BiP Client A: event(callState=Ended, reason=Other party left)"
  },
];

export default logSet;

