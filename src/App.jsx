 import Dropzone from './Dropzone';
import Sequence from './Sequence';
function App() {
  return (
    <section className="section">
       <div className="container-dropzone">
        <h1 className="title text-3xl font-bold">Log Analizi</h1>
        <p>Sadece .log uzantili dosyalar yuklenebilir</p>
        <Dropzone />
      </div> 
      {/* <div className="container-sequence">
        <Sequence />
      </div> */}
  </section>
   );
}

export default App;