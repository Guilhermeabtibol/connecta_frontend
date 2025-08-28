// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/RegisterUser';
import LeadsPage from './components/LeadsPage';
import UsersPage from './components/UsersPage';
import Layout from './components/Layout';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Use o Layout para envolver um grupo de rotas */}
        <Route element={<Layout />}>
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
