import React from 'react';
import './ComplaintStatus.css';

const ComplaintStatus = () => {
  const ongoingComplaints = []; // Assuming an empty array means no ongoing complaints

  return (
    <div className="complaint-status-container">
      <h1 className="title">Complaint Status Tracking</h1>
      {ongoingComplaints.length === 0 ? (
        <div className="no-complaints">
          <img src="no-complaints.svg" alt="No Complaints" className="no-complaints-image" />
          <h2 className="message">Great news!</h2>
          <p className="sub-message">There are currently no ongoing complaints. Everything is running smoothly!</p>
        </div>
      ) : (
        <div className="complaints-list">
          {/* Add your code to list ongoing complaints here */}
        </div>
      )}
    </div>
  );
};

export default ComplaintStatus;
