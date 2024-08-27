import Dropzone from './Dropzone';
import TopBar from './TopBar';
// import Sequence from './Sequence';
const App = () => {
  return (
    <section className="section">
      <div className="container">
        <TopBar />
        <div className="flex space-x-4">
          <Dropzone />
        </div>
      </div>
    </section>

  );
}
export default App;