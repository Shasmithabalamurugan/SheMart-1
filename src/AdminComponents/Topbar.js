import React from 'react';
import './Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <img src="admin-avatar.png" alt="Admin" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
