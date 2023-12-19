import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Boards from './pages/Boards';
import Fins from './pages/Fins';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Menu from './components/Menu'
import Footer from './components/footer';
function App() {
  return (
    <div id='page'>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Boards" element={<Boards />}></Route>
        <Route path="/Fins" element={<Fins />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
