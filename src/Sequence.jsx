import { render } from 'react-dom';
import SequenceDiagram from 'react-sequence-diagram';
const Sequence =() => {

    const input =
    'Note right of BiP Client A: Start Call\n' +
    'Note right of BiP Client A: Capability Check\n' +
    'Note right of BiP Client A: OutgoingCall UI\n' +
    'BiP Client A -> Jitsi SDK A: initJitsi (tokenA,roomName)\n' +
    'Note right of Jitsi Client A: Connecting\n' +

    'Note right of BiP Client A: Get Token\n' +
    'BiP Client A-->Jitsi SDK A: How are you?\n' +
    'Jitsi SDK A->>BiP Client A: I am good thanks!';

    const options = {
    theme: 'simple'
    };

    function onError(error) {
    console.log(error);
    }

    render(<SequenceDiagram input={input} options={options} onError={onError} />, document.getElementById('root'));
};
export default Sequence;
