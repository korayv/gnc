import './TopBar.css';

const TabBar = () => {
    return (
        <div className="topBar">
            <div className="logoContainer">
                <img src="./logo.png" alt="Logo" className="logo" />
            </div>

            <div className="textContainer">
                <h3 className="centeredText">BiP Log Visualization Application</h3>
            </div>
            <div className="buttonContainer">
                <button className="button">Configure JSON</button>
            </div>
        </div>
    );
};

export default TabBar;
