import React from 'react';
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import '../AdminComponents/AdminDashboard.css';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../AdminComponents/ProductList';
import OrderList from '../AdminComponents/OrderList';
import UserList from '../AdminComponents/UserList';

function AdminDashboard() {
  return (
    <div className="adminDashboard">
      <Topbar />
      <div className="dashboardContainer">
        <Sidebar />
        <div className="dashboardContent">
          <Routes>
            <Route path="products" element={<ProductList />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="users" element={<UserList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
