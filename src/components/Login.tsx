// src/components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ícones para mostrar/esconder a senha

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Novo estado para alternar a visibilidade
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://coneccta-backend.onrender.com/api/auth/login'
      //const response = await axios.post('http://localhost:3000/api/auth/login'
      , {
        email,
        password,
      } );
      const { token } = response.data;
      localStorage.setItem('token', token);
      alert('Login bem-sucedido!');
      navigate('/leads');
    } catch (error) {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    // CORREÇÃO: troquei -h-screen por h-screen
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        
        {/* Campo de Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="user1@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Campo de Senha */}
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Senha</label>
          <input
            type={showPassword ? 'text' : 'password'} // Alterna entre 'password' e 'text'
            id="password"
            name="password"
            placeholder="R12345#"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span 
            className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)} // Alterna o estado ao clicar
            >
            {showPassword ? <FaEyeSlash /> : <FaEye />}{/* Mostra o ícone correto */}
           </span>
        </div>
        
        {/* Botão de Submissão */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Entrar
        </button>
        
        {/* Link para a página de cadastro */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta? <Link to="/register" className="text-blue-500 hover:underline">Cadastre-se</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
