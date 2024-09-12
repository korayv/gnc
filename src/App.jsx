import { useState } from 'react';
import Dropzone from './Dropzone';
import TopBar from './TopBar';
import logSet from './log_set'; // Import the default logSet

const App = () => {
  const [currentLogSet, setCurrentLogSet] = useState(logSet); 

  const handleNewLogSet = (newLogSet) => {
    setCurrentLogSet(newLogSet); 
  };

  return (
    <section className="section">
      <div className="container">
        <div className="flex space-x-4">
          <TopBar onConfigureJSON={handleNewLogSet} /> 
        </div>
        <div className="flex space-x-4">
          <Dropzone logSet={currentLogSet}/>
        </div>
      </div>
    </section>
  );
}

export default App;
