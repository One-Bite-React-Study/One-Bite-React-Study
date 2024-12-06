import './App.css';
import { Viewer, Controller } from './components/_index';

function App() {
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>

      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
