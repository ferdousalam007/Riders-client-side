import React, { useState } from 'react';
import './Dashboard.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Button, Col, Row } from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Review from '../Review/Review';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddProucts from '../AddProucts/AddProucts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import PayBill from '../PayBill/PayBill';
import MyOrders from '../MyOrders/MyOrders';
import Logout from '../Logout/Logout';
import MangeAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Footer from '../Shared/Footer/Footer';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      <Row>
        <Col >
          <div>
            <div className='navbar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                  <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                <li>
                  <h1><Link to="/" className="nav-link active">Home</Link></h1>
                </li>
              </ul>
              <ul>
                <li>
                <Link to={`${url}`}><Button className='btn-bg w-75'>Pay Bill</Button></Link>
                </li>
                <li>
                  <Link to={`${url}/review`}><Button className='btn-bg w-75'>Reviiew</Button></Link>
                </li>
                <li>
                  <Link to={`${url}/MyOrders`}><Button className='btn-bg w-75'>My Orders</Button></Link>
                </li>
                



                <li>
                  <Link to={`${url}/ManageAllOrders`}><Button className='btn-bg w-75'>Manage All Orders</Button></Link>
                </li>
                <li>
                  <Link to={`${url}/makeAdmin`}><Button className='btn-bg w-75'>Make an Admin</Button></Link>
                </li>
                <li>
                  <Link to={`${url}/addProducts`}><Button className='btn-bg w-75'>Add a Products</Button></Link>
                </li>
                <li>
                  <Link to={`${url}/manageProducts`}><Button className='btn-bg w-75'>Manage Products</Button></Link>
                </li>


                <li>
                  <Link to={`${url}/Logout`}><Button className='btn-bg w-75'>Logout</Button></Link>
                </li>
              </ul>
            </nav>
            
          </div >

        
        <Switch>
              <Route exact path={path}>
                <PayBill></PayBill>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/MyOrders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/Logout`}>
                <Logout></Logout>
              </Route>


              <Route path={`${path}/ManageAllOrders`}>
                <MangeAllOrders></MangeAllOrders>
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/addProducts`}>
                <AddProucts></AddProucts>
              </Route>
              <Route path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </Route>
            </Switch></Col>
      </Row>
<Footer></Footer>
    </div>
  );
};

export default Dashboard;