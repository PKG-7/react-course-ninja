import './App.css';
import { Navbar } from './Navbar';
import { Home } from './Home';

const info = 'dick'

function App() {
  return (
    <div className="App">
      <Navbar info={info}/>
      <div className="content">
        <h1>
          <Home />
        </h1>
      </div>
    </div>
  );
}

export default App;
