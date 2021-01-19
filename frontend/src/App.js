import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



//Components
import Navbar from './components/Navbar'


//Screens
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Backdrop from './components/Backdrop';
import SideMenu from './components/SideMenu';

function App() {

  const [sideToggle, setSideToggle] = useState(false) 
  
  return(
  <Router>
    <Navbar click={() => setSideToggle(true)}/>
   <SideMenu show={sideToggle} click={() => setSideToggle(false)}/>
   <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>


    <main>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product/:id" component={ProductPage}/>
        <Route exact path="/cart" component={CartPage}/>
      </Switch>
    </main>
  </Router>
  );
  }

export default App;
