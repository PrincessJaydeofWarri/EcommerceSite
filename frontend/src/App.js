import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Components
import Navbar from './components/Navbar'


//Screens
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'

function App() {
  return(
  <Router>
    <Navbar/>
    {/* SideMenu */}
    {/* Backdrop placed behind sidemenu*/}


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
