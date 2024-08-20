const logSet = [

  // {
  //   logline: "P2PCallEventManager sendInfo",
  //   sequenceNote: "BiP Client A -> XMPP: event(Conferencejoined)",
  // },
  // {
  //   logline: "CallSetupTimeHelper Call",
  //   sequenceNote: "Note over BiP Client A: Call Setup",
  // },
  {
    logline: "P2PCallManager handleInitiate", //burda from 
    sequenceNote: "XMPP -> BiP Client A: handleInitiate(from: {{from}}, callId : {{callId}})"  }
  
  // {
  //   logline: "JitsiActivity",
  //   sequenceNote: "",
  // },

  // {
  //   logline: "CallAnalytics",
  //   sequenceNote: "",
  // },
];

export default logSet;
// ======================
// 2024-07-31 15:54:43.683 INFO P2PCallManager handleInitiate from : 905332101534@tims.turkcell.com.tr/BipMobileClient , domain : [https://voip02.bip.com/] , roomName : 905332101534_440a463b-f907-4a9b-98f5-bd9699c0f34c_call , callId : 8F30F750-537B-4D71-8992-889F65FDB09C , callType : voice , messageId : gcc_U3QAeDX3-381
// ======================