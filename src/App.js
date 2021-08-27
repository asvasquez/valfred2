import './App.css';
import logo from "../src/logo.svg" 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {ItemListContainer} from './container/ItemListContainer'
import {ItemDetailContainer} from './container/ItemDetailContainer'
import {NavbarComponent} from './components/Navbar'
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent/>
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/category/:category.id" component={ItemListContainer}/>
          </Switch>
          <footer className="App-logo" ><img src={logo}  alt="logo" /></footer>
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;
