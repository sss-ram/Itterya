import React from 'react';

const App = () => {
  const toggleSection = (sectionId) => {
    document.querySelectorAll('main section').forEach(section => {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src="Iteryapic.png" alt="Iterya Logo" />
          <h1>ITTERYA</h1>
        </div>
      </header>

      <main>
        <nav className="dashboard-nav">
          <ul>
            <li><a href="index.html" onClick={() => toggleSection('home')}>Home</a></li>
            <li><a href="#profile" onClick={() => toggleSection('profile')}>Profile</a></li>
            <li><a href="case_study.html" onClick={() => toggleSection('case-steps')}>Cases Ready For Takeup</a></li>
            <li><a href="suggest_new_laws.html" target="_blank">Suggest New Laws</a></li>
            <li><a href="#logout" onClick={() => toggleSection('logout')}>Logout</a></li>
          </ul>
        </nav>

        <section id="welcome-text" style={{ textAlign: 'center' }}>
          <h2>Welcome to ITTERYA</h2>
          <p>-The platform for undertrial prisoners</p>
        </section>

        <section id="profile" style={{ display: 'none' }}>
          <h2>Profile</h2>
          {/* Display lawyer's profile information here */}
        </section>

        <section id="case-steps" style={{ display: 'none' }}>
          <h2>Case Steps</h2>
          {/* Display information about case steps here */}
        </section>
      </main>

      <aside>
        <div className="availability-box">
          <h2>Availability Status</h2>
          <p>Currently Available for New Cases:</p>
          <p id="availability">Available</p>
        </div>
        <div style={{ marginTop: '20px' }}></div>
        <div className="contact-box">
          <h2>Contact</h2>
          <p>If you need assistance, contact <a href="mailto:info@itterya.com">info@itterya.com</a>.</p>
        </div>
        <h2>Terms and Conditions</h2>
        <p><a href="terms_and_conditions.txt" target="_blank">Terms and Conditions</a></p>
      </aside>

      <footer>
        <p>&copy; 2024 Iterya. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;