import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Register } from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
    </Routes>
    <div className="App" id='app'>
      <Register/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
