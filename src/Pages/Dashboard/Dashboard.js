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

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      <Row>
        <Col xs={2}>
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
                  <Link to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
                </li>
                <li>
                  <Link to={`${url}/addProducts`}><Button>Add Products</Button></Link>
                </li>
              </ul>
            </nav>
            
          </div >

        </Col>
        <Col><Switch>
              <Route exact path={path}>
                <Review></Review>
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/addProducts`}>
                <AddProucts></AddProucts>
              </Route>
            </Switch></Col>
      </Row>

    </div>
  );
};

export default Dashboard;