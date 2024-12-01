'use client'

import { useState } from 'react';

     const CreateTask = ({ userId }) => {
       const [name, setName] = useState('');

       const handleSubmit = (e) => {
         e.preventDefault();
         fetch('/api/tasks', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ user_id: userId, name }),
         }).then(response => response.json());
       };

       return (
         <form onSubmit={handleSubmit}>
           <input 
             type="text" 
             placeholder="Nome da Tarefa" 
             value={name} 
             onChange={(e) => setName(e.target.value)} 
           />
           <button type="submit">Criar Tarefa</button>
         </form>
       );
     };

     export default CreateTask;
