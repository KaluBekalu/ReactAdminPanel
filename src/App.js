import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/products/Product";
import Products from "./pages/productList/ProductList";
import ComingSoon from "./pages/comingSoon/ComingSoon";

// Edn Paged

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
          <Route exact path="/newUser">
            <NewUser />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/product/:productID">
            <Product />
          </Route>
          <Route exact path="/comingSoon">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
