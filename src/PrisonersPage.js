import React from 'react';

const App = () => {
    const toggleSection = (sectionId) => {
        // Hide all sections
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = 'none';
        });
        // Show the clicked section
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
                        <li><a href="#home" onClick={() => toggleSection('home')}>Home</a></li>
                        <li><a href="#profile" onClick={() => toggleSection('profile')}>Profile</a></li>
                        <li><a href="#legal-resources" onClick={() => toggleSection('legal-resources')}>Legal Resources</a></li>
                        <li><a href="#search-assistance" onClick={() => toggleSection('search-assistance')}>Search for Assistance</a></li>
                        <li><a href="#current legal status" onClick={() => toggleSection('current-legal-status')}>Current legal status</a></li>
                        <li><a href="#notifications" onClick={() => toggleSection('notifications')}>Notifications</a></li>
                        <li><a href="#logout" onClick={() => toggleSection('logout')}>Logout</a></li>
                    </ul>
                </nav>
                <section id="welcome-text">
                    <h2>Welcome to Iterya</h2>
                    <p>This is the dashboard for prisoners.</p>
                </section>
                <section id="home" style={{ display: 'none' }}>
                    <p>Click here to move to main page <a href="index.html">here</a>.</p>
                </section>
                <section id="profile" style={{ display: 'none' }}>
                    <h2>Profile</h2>
                    {/* Display prisoner's information here */}
                </section>
                <section id="legal-resources" style={{ display: 'none' }}>
                    <h2>Legal Resources</h2>
                    <p>Access legal resources <a href="https://lawmin.gov.in/">here</a>.</p>
                </section>
                <section id="search-assistance" style={{ display: 'none' }}>
                    <h2>Search for Assistance</h2>
                    {/* Include search form for assistance here */}
                </section>
                <section id="current-legal-status" style={{ display: 'none' }}>
                    <h2>Current legal status</h2>
                    {/* Include search form for assistance here */}
                </section>
                <section id="notifications" style={{ display: 'none' }}>
                    <h2>Notifications</h2>
                    {/* Display notifications or messaging functionality here */}
                </section>
            </main>
            <aside>
                <h2>Contact</h2>
                <p>If you need assistance, contact <a href="mailto:info@itterya.com">info@itterya.com</a>.</p>
                <h2>Terms and Conditions</h2>
                <p><a href="terms_and_conditions.txt" target="_blank">Terms and Conditions</a></p>
            </aside>
            <footer>
                <p>&copy; 2024 Iterya. All rights reserved.</p>
            </footer>
        </>
    );
}

export default App;