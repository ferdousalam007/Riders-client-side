import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';
// import Navbar from './Pages/Shared/Navigation/Navbar';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProucts from './Pages/AddProucts/AddProucts';
import Products from './Pages/Products/Products';
import Orderpage from './Pages/Orderpage/Orderpage';
import MyOrders from './Pages/MyOrders/MyOrders';
import Review from './Pages/Review/Review';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
            <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute exact path="/purchase/:_id">
              <Orderpage></Orderpage>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
