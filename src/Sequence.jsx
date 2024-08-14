import { createRoot } from 'react-dom/client';
import SequenceDiagram from 'react-sequence-diagram';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
const Sequence =() => {

    const input =

    
    'Note over  BiP Client A: Start Call\n' +
    'Note over  BiP Client A: Capability Check\n' +
    'Note over  BiP Client A: OutgoingCall UI\n' +
    'Note over BiP Client A: Get Token\n' +
    'BiP Client A -> Jitsi SDK A: initJitsi (tokenA,roomName)\n' +
    'Note over  Jitsi Client A: Connecting\n' +
    'Jitsi Client A -> BiP Jitsi Backend: join(tokenA, roomName)\n'+
    'Jitsi Client A -> BiP Client A: event(Conferencejoined)\n' +
    'BiP Client A -> XMPP: Initiate(tokenB,sesionId)\n' +
    'Note over  BiP Client A: Answer Time Started\n' +
    'XMPP -> BiP Client B: Initiate(roomName,sesionId)\n' +
    'Note over  BiP Client B:  Ingoing Call UI\n' +
    'Note over  BiP Client B:  Ringing\n' +
    'Note over  BiP Client B:  Ringing Timer Started\n' +
    'BiP Client B -> XMPP: info(state=Ringing,sesionId)\n' +
    'XMPP -> BiP Client A: info(state=Ringing,sesionId\n' +
    'BiP Client A->Jitsi SDK A: event(Ringing)\n' +
    'Note over  BiP Client A:  Ringback tone\n' +
    'Note over  BiP Client B:  Accept Call\n' +
    'Note over  BiP Client B:  Ringing timer stopped\n' 

    const options = {
    theme: 'simple'
    };

    function onError(error) {
    console.log(error);
    }

    root.render(<SequenceDiagram input={input} options={options} onError={onError} />, document.getElementById('root'));
};
export default Sequence;
