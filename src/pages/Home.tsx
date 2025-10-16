import { Link } from 'react-router-dom';
import { FaHome, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <FaHome className="text-6xl text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Hello World
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern React application with TypeScript and Tailwind CSS
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FaRocket />
              Go to Dashboard
            </Link>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              React + TypeScript
            </h3>
            <p className="text-gray-600">
              Built with modern React and TypeScript for type safety and better developer experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tailwind CSS
            </h3>
            <p className="text-gray-600">
              Styled with Tailwind CSS for rapid UI development with utility-first classes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              React Router
            </h3>
            <p className="text-gray-600">
              Client-side routing with React Router for seamless navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
