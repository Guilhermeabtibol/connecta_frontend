import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ícones para mostrar/esconder a senha

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('sales');
  const [showPassword, setShowPassword] = useState(false); // Novo estado para alternar a visibilidade
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/register', {
        name,
        email,
        password,
        role,
      });
      alert('Usuário registrado com sucesso! Por favor, faça o login.');
      navigate('/');
    } catch (error) {
      alert('Não foi possível registrar o usuário. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="p-8 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h2>

        {/* Campo de Nome */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Campo de Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Campo de Senha com botão de alternância */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-900 font-semibold mb-2">Senha</label>
          <input
            type={showPassword ? 'text' : 'password'} // Alterna entre 'password' e 'text'
            id="password"
            placeholder="Crie uma senha"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // pr-10 para dar espaço ao ícone
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span 
            className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)} // Alterna o estado ao clicar
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Mostra o ícone correto */}
          </span>
        </div>
        
        {/* Campo de Função (Role) */}
        <div className="mb-6">
          <label htmlFor="role" className="block text-gray-900 font-semibold mb-2">Função</label>
          <select
            id="role"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="sales">Vendas</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        {/* Botão de Submissão */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
        >
          Cadastrar
        </button>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Já tem uma conta? <Link to="/" className="text-blue-500 hover:underline">Faça login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;