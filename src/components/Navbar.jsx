import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3, Users } from 'lucide-react';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Timeline', path: '/timeline', icon: <Clock size={18} /> },
    { name: 'Stats', path: '/stats', icon: <BarChart3 size={18} /> },
  ];

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2 font-bold text-xl text-indigo-600">
        <Users />
        <span>KeenKeeper</span>
      </div>
      <div className="flex gap-6">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors ${
                isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 hover:text-indigo-400'
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;