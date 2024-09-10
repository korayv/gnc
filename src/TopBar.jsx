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
                    // Parse JSON file
                    const jsonContent = JSON.parse(fileContent);
                    onConfigureJSON(jsonContent); 
                    setShowUploadPopup(false); 
                } catch {
                    console.error('Invalid JSON file');
                    alert("Lütfen geçerli bir JSON yükleyin. Kabul edilen format için dökümantasyona bakabilirsiniz.")
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
