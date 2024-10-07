import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home size={24} />
          <span className="text-xl font-bold">Cozy Homestay</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/rooms" className="hover:underline">Rooms</Link></li>
            <li><Link to="/login" className="hover:underline flex items-center"><User size={18} className="mr-1" /> Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;