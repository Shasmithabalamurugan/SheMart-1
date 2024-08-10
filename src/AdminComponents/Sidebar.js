import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarMenu">
          <li className="sidebarTitle">Dashboard</li>
          <li className="sidebarListItem">
            <Link to="/admin/products">Products</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
