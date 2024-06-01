import './App.css';
import Title from './Title/Title';
import TryingGlass from './TryingGlass/TryingGlass';

function App() {
  return (
    <div className="App">
      <div className='imageBG'>
        <div className='content'>
          <div className='content-title'>
            <Title/>
          </div>
          <div className='container'>
            <TryingGlass/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
