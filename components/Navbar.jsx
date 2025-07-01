import React, { useContext, useState } from 'react';
import pixabayContext from '../context/PixabayContext';
import './Navbar.css';

const Navbar = () => {
  const { fetchImageByCategory, setSearch } = useContext(pixabayContext);
  const [menuOpen, setMenuOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false); // mock auth

  const categories = [
    'Buildings', 'Sports', 'Nature', 'Transportation',
    'Travel', 'Food', 'Science', 'Computer'
  ];

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => setLoggedIn(false);

  return (
    <>
      <nav className="navbar-custom">
        <div className="logo">SnapFind</div>

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search high-quality images..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="auth-btns">
            {!loggedIn ? (
              <button onClick={handleLogin} className="auth-btn login">Login</button>
            ) : (
              <button onClick={handleLogout} className="auth-btn logout">Logout</button>
            )}
          </div>
        </div>
      </nav>

      <div className="category-bar">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => fetchImageByCategory(cat.toLowerCase())}
            className="category-btn"
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
