import React, { useState } from 'react';
import './Dashboard.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

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
                <li>
                  
                </li>



              </ul>
            </nav>
          </div >

        </Col>
        <Col>3 of 3</Col>
      </Row>

    </div>
  );
};

export default Dashboard;