import Dropzone from './Dropzone';
// import Sequence from './Sequence';
const App = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Log Analizi</h1>
        <div className="flex space-x-4">
          <Dropzone />
        </div>
      </div>
    </section>

  );
}
export default App;