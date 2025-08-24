// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/RegisterUser'; // Importe o componente Register
import LeadsPage from './components/LeadsPage';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Adicione a nova rota */}
        
        <Route element={<ProtectedRoute />}>
          <Route path="/leads" element={<LeadsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;