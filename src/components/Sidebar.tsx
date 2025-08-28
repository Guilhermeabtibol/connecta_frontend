// src/components/Sidebar.tsx

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">Connecta</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link 
              to="/leads" 
              className="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              Leads
            </Link>
          </li>
          <li>
            <Link 
              to="/users" 
              className="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
            >
              Usuários
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
