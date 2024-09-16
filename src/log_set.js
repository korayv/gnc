const logSet = [
  {
    logline: "JitsiViewModel init",
    sequenceNote: "BiP Client A -> Jitsi SDK A: initJitsi"
  },
  {
    logline: "P2PCallManager handleInitiate",
    sequenceNote: "XMPP -> BiP Client A: handleInitiate(from: {{from}} callId: {{callId}})"
  },
  {
    logline: "P2PCallManager answerTimer Started",
    sequenceNote: "Note over BiP Client A: Answer Timer Started"
  },
  {
    logline: "CallManager showIncomingCallNotification",
    sequenceNote: "Note over BiP Client A: Incoming Call Notification"
  },
  {
    logline: "P2PCallManager ringingTimer Started",
    sequenceNote: "Note over BiP Client A: Ringing Timer Started"
  },
  {
    logline: "P2PCallEventManager sendInfo",
    sequenceNote: "BiP Client A -> XMPP: Send Info to: {{to}}, state: {{state}}"
  },
  {
    logline: "JitsiViewModel handleCallEvent RINGING",
    sequenceNote: "BiP Client A -> Jitsi SDK A: Event RINGING"
  },
  {
    logline: "P2PCallManager handleInfo from",
    sequenceNote: "XMPP -> BiP Client A: Handle Info from: {{from}}, state {{state}}!"
  },
  {
    logline: "VoIPSDK Conference will join",
    sequenceNote: "Jitsi SDK A -> BiP Client A: conferenceWillJoin(bipRoomName={{bipRoomName}})"
  },
  {
    logline: "VoIPSDK Conference joined",
    sequenceNote: "Jitsi SDK A -> BiP Client A: conferenceJoined((bipRoomName={{bipRoomName}})"
  },
  {
    logline: "VoIPSDK Conference terminated",
    sequenceNote: "Jitsi SDK A -> BiP Client A: conferenceTerminated(bipRoomName={{bipRoomName}})"
  },
  {
    logline: "VoIPSDK Call event received",
    sequenceNote: "Jitsi SDK A -> BiP Client A: Call event received (callState={{callState}}, reason={{reason}}, callState= {{callState}} )"
  }
];

export default logSet;

