import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import ProductItem from './components/ProductItem';
import { FurrlProvider } from './context/furrlContext';
import './App.css';
import Cart from './components/Cart/Cart';
import Bookmark from './components/Bookmark';
import Notfound from './components/Notfound/Notfound';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <BrowserRouter>
      <FurrlProvider>
        <NavBar/>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/productitem/:id' Component={ProductItem} />
          <Route exact path='/cart' Component={Cart} />
          <Route exact path='/bookmark' Component={Bookmark} />
          <Route path='*' Component={Notfound}/>
        </Routes>
      </FurrlProvider>
    </BrowserRouter>
  )
}
export default App;