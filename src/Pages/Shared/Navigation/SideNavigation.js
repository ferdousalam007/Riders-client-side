// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './SideNavigation.css';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// const SideNavigation = () => {
//     const [sidebar, setSidebar] = useState(true);

//     const showSidebar = () => setSidebar(!sidebar);
//     return (
//         <div>
//             <div className='navbar'>
//                 <Link to='#' className='menu-bars'>
//                     <FaIcons.FaBars onClick={showSidebar} />
//                 </Link>
//             </div>
//             <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//                 <ul className='nav-menu-items' onClick={showSidebar}>
//                     <li className='navbar-toggle'>
//                         <Link to='#' className='menu-bars'>
//                             <AiIcons.AiOutlineClose />
//                         </Link>
//                     </li>
//                     <li>
//                     <h1><Link to="/" className="nav-link active">Home</Link></h1>
//                     </li>
                   
//                 </ul>
//             </nav>
//         </div >
//     );
// };

// export default SideNavigation;