import { useState } from 'react';
import Dropzone from './Dropzone';
import TopBar from './TopBar';
import logSet from './log_set'; // Import the default logSet

const App = () => {
  const [currentLogSet, setCurrentLogSet] = useState(logSet); // Manage logSet state here

  const handleNewLogSet = (newLogSet) => {
    setCurrentLogSet(newLogSet); // Update the logSet when a new one is uploaded
  };

  return (
    <section className="section">
      <div className="container">
        <TopBar onConfigureJSON={handleNewLogSet} /> {/* Pass the function to TopBar */}
        <div className="flex space-x-4">
          <Dropzone logSet={currentLogSet} /> {/* Pass the current logSet to Dropzone */}
        </div>
      </div>
    </section>
  );
}

export default App;
