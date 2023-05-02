import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Landing/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CartWidget from "./components/CartWidget/CartWidget";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart' element={<CartWidget />} />
      </Routes>
    </div>
  );
}

export default App;
