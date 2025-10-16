import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChartBar, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            HelloWorld
          </Link>

          <div className="flex gap-6 items-center">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaHome />
              <span>Home</span>
            </Link>

            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaChartBar />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/login"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/login')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>

            <Link
              to="/signup"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaUserPlus />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
