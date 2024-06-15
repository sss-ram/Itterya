import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="main-content">
        <a href="#" className="logo-link"><img src="Iteryapic.png" alt="Iterya Logo" className="logo" /></a>
        <div className="logo-wrapper">
          <h1>ITTERYA</h1>
        </div>
        <p className="platform-description">- the platform for undertrial prisoners</p>
        <div className="login-section">
          <div className="login-box">
            <h2>Prisoner Login</h2>
            <form action="prisoner.html">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
            </form>
          </div>
          <div className="login-box">
            <h2>Lawyer Login</h2>
            <form action="lawyers.html">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
            </form>
          </div>
          <div className="login-box">
            <h2>Others Login</h2>
            <form action="others.html">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;