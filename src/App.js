import './App.css';
import Ruta from "./routes/routes.js"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Ruta/>
      </BrowserRouter>
    </div>
  );
}

export default App;