import { useState } from 'react';
import Dropzone from './Dropzone';
import TopBar from './TopBar';
import logSet from './log_set'; // Import the default logSet
import './App.css'
const App = () => {
  const [currentLogSet, setCurrentLogSet] = useState(logSet);

  const handleNewLogSet = (newLogSet) => {
    setCurrentLogSet(newLogSet);
  };

  return (
    <div className="container">
      <section className='header'>
        <div className='topbar'>
          <TopBar onConfigureJSON={handleNewLogSet} />
        </div>
      </section>
      <section className='content'>
        <div className='dropzone'>
          <Dropzone logSet={currentLogSet} />
        </div>
      </section>
      </div>
  );
}

export default App;
