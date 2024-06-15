import React from 'react';

function App() {
  return (
    <>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1>Court Session Experience & Legal Queries</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <div className="form-container" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <h2>Share Your Court Session Experience and Suggestions</h2>
          <form action="#">
            <label htmlFor="experience">Your Experience and Suggestions:</label>
            <textarea id="experience" name="experience" rows="6" cols="50" placeholder="Share your experience and suggestions..." />
            <input type="submit" value="Submit Experience" style={{ alignSelf: 'center', padding: '7px 15px', backgroundColor: 'blue', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }} />
          </form>
        </div>

        <div className="form-container" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
          <h2>Ask a Legal Query</h2>
          <form action="#">
            <label htmlFor="query">Your Query:</label>
            <input type="text" id="query" name="query" placeholder="Ask your legal query..." />
            <input type="submit" value="Submit Query" style={{ alignSelf: 'center', padding: '7px 15px', backgroundColor: 'blue', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }} />
          </form>
        </div>

        <a href="https://lawmin.gov.in/" style={{ color: '#333', textDecoration: 'none', padding: '10px', border: '1px solid #333', borderRadius: '5px', display: 'inline-block', marginTop: '10px' }}>Legal Resources</a>
      </main>
      <footer>
        <p>&copy; 2024 Court Session Experience & Legal Queries</p>
        <p><a href="#">Logout</a></p>
      </footer>
    </>
  );
}

export default App;