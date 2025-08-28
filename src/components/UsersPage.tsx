// src/components/UsersPage.tsx
import React, { useState } from 'react';

// Dados de exemplo para iniciar a lista
const initialUsers = [
  { id: 1, name: 'Guilherme', email: 'guilherme@exemplo.com', company: 'Google' },
  { id: 2, name: 'Roger', email: 'roger@exemplo.com', company: 'Microsoft' },
];

const UsersPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // Novo estado para a empresa
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
        company, // Adiciona a empresa ao novo usuário
      };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
      setCompany(''); // Limpa o campo após o cadastro
      setShowForm(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gerenciar Usuários</h1>

      {/* Botão para abrir o formulário */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {showForm ? 'Fechar Formulário' : 'Adicionar Novo Usuário'}
      </button>

      {/* Formulário de Cadastro (exibido apenas se showForm for true) */}
      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Cadastrar Novo Usuário</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            {/* Novo campo para a empresa */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cadastrar
            </button>
          </form>
        </div>
      )}

      {/* Lista de Usuários Cadastrados */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Usuários Cadastrados</h2>
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.id} className="py-4 flex justify-between items-center">
              <div>
                <p className="text-lg font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                {/* Exibe a empresa na lista */}
                <p className="text-sm text-gray-500">Empresa: {user.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
