import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Boards from './pages/Boards';
import Fins from './pages/Fins';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Boards" element={<Boards />}></Route>
        <Route path="/Fins" element={<Fins />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>

      </Routes>
    </div>
  );
}

export default App;
