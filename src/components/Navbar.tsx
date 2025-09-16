import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Qiskit_Logo from '../assets/qiskit logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={Qiskit_Logo} alt="Qiskit" className="nav-logo-img" />
          <span>Qiskit Fall Fest</span>
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/organizers" 
            className={`nav-link ${isActive('/organizers') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Organizers
          </Link>
          <Link 
            to="/past-event" 
            className={`nav-link ${isActive('/past-event') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Past Event
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;