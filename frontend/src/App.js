import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Boards from './pages/Boards';
import Fins, { Ostoskori } from './pages/Fins';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Menu from './components/Menu'
import Footer from './components/footer';
import { CartProvider } from './pages/Fins';
function App() {
  return (
    <div id='page'>
      <Menu />
      <CartProvider>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Fins" element={<Fins />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>


      </Routes>
      <Ostoskori />
      </CartProvider>

      <Footer />
    </div>
  );
}

export default App;
