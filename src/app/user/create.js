'use client'
import Link from "next/link"
import { useState } from 'react'
import "../globals.css";


const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    }).then(response => response.json());
  };

  return (
    <div>
      <ui>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Criar Usuário</button>
        </form>
        <li>
          <h1>Página de Criar Peter</h1><Link href="../">Ir para página do Peter</Link>
        </li>
      </ui>
    </div>
  );
};

export default CreateUser;