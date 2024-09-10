import { useState } from 'react';
import './TopBar.css';
import PropTypes from 'prop-types';


const TopBar = ({ onConfigureJSON }) => {
    const [showUploadPopup, setShowUploadPopup] = useState(false);

    const handleConfigureClick = () => {
        setShowUploadPopup(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && onConfigureJSON) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const fileContent = event.target.result;
                try {
                    const jsonContent = JSON.parse(fileContent); // Parse JSON file
                    onConfigureJSON(jsonContent); // Pass the new JSON log set to App component
                    setShowUploadPopup(false); // Close popup after upload
                } catch {
                    console.error('Invalid JSON file');
                }
            };
            reader.readAsText(file);
        }
    };

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
            {/* Popup for file upload 
            **TO DO ESC BUTTON WILL EXIT THE MODAL
            */}
            {showUploadPopup && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => setShowUploadPopup(false)}>&times;</span>
                        <h3>Upload a new JSON log file</h3>
                        <input type="file" accept="application/json" onChange={handleFileChange} />
                        <button className="button" onClick={() => setShowUploadPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};
TopBar.propTypes = {
    onConfigureJSON: PropTypes.func.isRequired,
};
export default TopBar;
