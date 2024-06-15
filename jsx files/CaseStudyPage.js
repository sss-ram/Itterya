import React from 'react';

function App() {
  return (
    <div className="container">
      <h2>Cases Ready For Takeup</h2>
      
      <div className="case-list">
        <div className="case-item">
          <h3>Case 1: [Undertrial Prisoner Name]</h3>
          <p><strong>Charges:</strong> [Charges Faced]</p>
          <p><strong>Stage:</strong> [Stage of Legal Process]</p>
          <p><strong>Location:</strong> [Prison Location]</p>
          <div className="message-box">
            <h4>Communication Channel</h4>
            <textarea placeholder="Write your message for Case 1 here..."></textarea>
            <input type="submit" value="Send" />
          </div>
          <button className="accept-btn">Accept</button>
          <button className="reject-btn">Reject</button>
        </div>
        <div className="case-item">
          <h3>Case 2: [Undertrial Prisoner Name]</h3>
          <p><strong>Charges:</strong> [Charges Faced]</p>
          <p><strong>Stage:</strong> [Stage of Legal Process]</p>
          <p><strong>Location:</strong> [Prison Location]</p>
          <div className="message-box">
            <h4>Communication Channel</h4>
            <textarea placeholder="Write your message for Case 2 here..."></textarea>
            <input type="submit" value="Send" />
          </div>
          <button className="accept-btn">Accept</button>
          <button className="reject-btn">Reject</button>
        </div>
        {/* More case items can be added dynamically */}
      </div>

      <div className="availability-status">
        <h3>Availability Status</h3>
        <label htmlFor="availability">Currently Available for New Cases:</label>
        <select id="availability">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
}

export default App;