 import Dropzone from './Dropzone';
import Sequence from './Sequence';
const App =() => {
  return (
    <section className="section">
      <div className="container">
        <h1>Log Analizi</h1>
        <p>Lütfen log dosyasını yükleyin.</p>
        <div className="flex space-x-4">
       
        <Sequence />
        
        
        {/* <Dropzone /> */}

        </div>
      </div>
  </section>

   );
}
export default App;