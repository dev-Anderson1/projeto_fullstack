'use client'

import { useEffect, useState } from 'react';

     const UserList = () => {
       const [users, setUsers] = useState([]);

       useEffect(() => {
         fetch('/api/users')
           .then(response => response.json())
           .then(data => setUsers(data));
       }, []);

       return (
         <div>
           <h1>Usuários</h1>
           <ul>
             {users.map(user => (
               <li key={user.id}>{user.name}</li>
             ))}
             <li>
              <h1>Página de Listar</h1><Link href="/user/">Voltar</Link>
             </li>
           </ul>
         </div>
       );
     };

     export default UserList;
