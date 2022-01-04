import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './Pages/Products/Products';
import AddProducts from './Pages/AddProducts/AddProducts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products></Products>
        </Route>
        <Route path="/add-products">
          <AddProducts></AddProducts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
