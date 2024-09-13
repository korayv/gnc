import { useEffect, useState } from 'react';
import './TopBar.css';
import PropTypes from 'prop-types';
import DropzoneArea from './DropzoneArea';

const TopBar = ({ onConfigureJSON }) => {
    const [showUploadPopup, setShowUploadPopup] = useState(false);
    const [isUpload, setIsUpload] = useState(false);
    const [showDocsPopUp, setShowDocsPopUp] = useState(false);

    // Handles showing and hiding modals
    const handleConfigureClick = () => {
        setShowUploadPopup(true);
    };

    const handleLinkClick = (e) => {
        e.preventDefault(); // Prevent the default anchor behavior
        setShowDocsPopUp(true);
    };

    const handleEscPressing = (e) => {
        if (e.key === 'Escape') {
            setShowUploadPopup(false);
            setShowDocsPopUp(false);
        }
    };

    const handleFile = (files) => {
        const file = files[0];
        if (file && onConfigureJSON) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const fileContent = event.target.result;
                setIsUpload(true);

                try {
                    // Parse JSON file
                    const jsonContent = JSON.parse(fileContent);
                    onConfigureJSON(jsonContent);
                    setShowUploadPopup(false);
                } catch {
                    console.error('Invalid JSON file');
                    alert("Lütfen geçerli bir JSON yükleyin. Kabul edilen format için dökümantasyona bakabilirsiniz.");
                }
            };
            reader.readAsText(file);
        }
    };

    // Add and remove escape key event listeners
    useEffect(() => {
        if (showUploadPopup || showDocsPopUp) {
            window.addEventListener('keydown', handleEscPressing);
        } else {
            window.removeEventListener('keydown', handleEscPressing);
        }
        return () => {
            window.removeEventListener('keydown', handleEscPressing);
        };
    }, [showUploadPopup, showDocsPopUp]);

    return (
        <div className="topBar">
            <div className="logoContainer">
                <img src="./logo.png" alt="Logo" className="logo" />
            </div>
            <div className="textContainer">
                <h3 className="centeredText">BiP Log Visualization Application</h3>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={handleConfigureClick}>Configure JSON</button>
            </div>

            {showUploadPopup && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="modalClose" onClick={() => setShowUploadPopup(false)}>&times;</span>
                        <h3>Upload a new JSON log file</h3>
                        <DropzoneArea onFilesDrop={handleFile} />
                        <button className="button close-btn" onClick={() => setShowUploadPopup(false)}>Close</button>
                    </div>
                </div>
            )}

            <div className="status">
                <p>{isUpload ? "Uploaded log file" : "Default log file"}</p>
            </div>

            {/* Documentation link */}
            <div className='docs'>
                <p><a href="#" onClick={handleLinkClick}>Docs</a></p>
            </div>

            {/* Documentation Modal */}
            {showDocsPopUp && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="modalClose" onClick={() => setShowDocsPopUp(false)}>&times;</span>
                        <h3>Documentation</h3>
                        <section>
                            <h2>1. Overview</h2>
                            <p>
                                The <strong>Log Visualization App</strong> is a client-side platform for uploading, visualizing, and analyzing
                                log files in real-time through <strong>Sequence Diagrams</strong>. It operates entirely on the web with no
                                backend or database, making it lightweight, easy to deploy, and maintain. The app converts log files into
                                visual diagrams for analysis.
                            </p>
                        </section>

                        <section>
                            <h2>2. Features</h2>
                            <ul>
                                <li>Upload and process log files for real-time visualization.</li>
                                <li>Visualize log data using <strong>Sequence Diagrams</strong>.</li>
                                <li>Dynamic, JSON-based log file construction for visualization.</li>
                                <li>Filter and search through log events.</li>
                                <li>Export visualized data as JSON or an image.</li>
                                <li>Search and highlight specific log entries.</li>
                                <li>Auto-refresh feature for continuously updating log data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. Configuring Log Set</h2>
                            <p>
                                You can configure the log set by defining log lines and how they should be represented in the sequence diagram
                                using an easy-to-understand syntax.
                            </p>

                            <h3>Logset File Structure</h3>
                            <ul>
                                <li>
                                    <strong>Logline</strong>: The log line that is matched in the log file.
                                </li>
                                <li>
                                    <strong>SequenceNote</strong>: Instructions for drawing the sequence diagram based on the logline.
                                </li>
                            </ul>

                            <h3>Regex Format</h3>
                            <p>
                                The sequence note uses dynamic placeholders within curly braces, such as callId. The regex
                                matches log lines, extracting patterns like &quot;key: value,&quot; where the key is a word, and the value is a group of
                                characters without spaces or commas.
                            </p>
                        </section>

                        <section>
                            <h2>4. Sequence Diagram Note Syntax</h2>
                            <h3>Lines and Joints</h3>
                            <pre>
                                <code>
                                    Actor A --&gt; Actor B: Some words
                                </code>
                            </pre>
                            <p>
                                This draws a lifeline between two actors (Actor A and Actor B), with the message shown on the connecting
                                arrow.
                            </p>

                            <h3>Writing Notes on Lifelines</h3>
                            <pre>
                                <code>
                                    Note over Actor A: Some words in a box
                                </code>
                            </pre>
                            <p>This places a note on Actor A&apos;s lifeline.</p>

                            <pre>
                                <code>
                                    Note left of Actor A: Some words in a box
                                </code>
                            </pre>
                            <p>This places a note to the left of Actor A&apos;s lifeline.</p>

                            <pre>
                                <code>
                                    Note right of Actor A: Some words in a box
                                </code>
                            </pre>
                            <p>This places a note to the right of Actor A&apos;s lifeline.</p>

                            <p>
                                <strong>Note:</strong> Be sure to use a colon after each actor&apos;s name when specifying messages.
                            </p>
                        </section>

                        <section>
                            <h2>5. Default Logset for Android Logs</h2>
                            <pre>
                                <code>
                                    {`const logSet = [
  {
    logline: "P2PCallManager handleInitiate",
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

export default logSet;
`}
                                </code>
                            </pre>
                            <p>This example demonstrates how loglines are translated into sequence diagram notations.</p>
                        </section>
                    </div>
                    <button className="button close-btn" onClick={() => setShowDocsPopUp(false)}>Close</button>
                </div>
            )
            }
        </div >
    );
};

TopBar.propTypes = {
    onConfigureJSON: PropTypes.func.isRequired,
};

export default TopBar;
