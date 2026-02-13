import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";

function App() {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
          <Link to="/" className="nav-item" style={{ textDecoration: "none", color: "#0077cc" }}>
            Home
          </Link>
          <Link to="/about" className="nav-item" style={{ textDecoration: "none", color: "#0077cc" }}>
            About Me
          </Link>
          <Link to="/portfolio" className="nav-item" style={{ textDecoration: "none", color: "#0077cc" }}>
            Portfolio
          </Link>
          <Link to="/contact" className="nav-item" style={{ textDecoration: "none", color: "#0077cc" }}>
            Contact
          </Link>
        </nav>
      </header>

      <main style={{ maxWidth: "960px", margin: "2rem auto", padding: "0 1rem" }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route
            path="/portfolio"
            element={
              <div>
                <h1>Portfolio</h1>
                <p>Projects coming soon!</p>
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <h1>Contact</h1>
                <p>Get in touch via email or social media.</p>
              </div>
            }
          />
          <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} />
        </Routes>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          borderTop: "1px solid #ddd",
          marginTop: "4rem",
          color: "#666",
        }}
      >
        &copy; {new Date().getFullYear()} DINDO C. ESMANI — Built with React
      </footer>
    </>
  );
}

export default App;
