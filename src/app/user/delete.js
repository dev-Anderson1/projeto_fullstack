'use client'

const deleteUser = (id) => {
    fetch(`/api/users/${id}`, {
      method: 'DELETE',
    }).then(() => {
      // Atualizar a lista após a exclusão
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} <button onClick={() => deleteUser(user.id)}>Excluir</button>
        </li>
      ))}
      <li>
        <h1>Página de Deletar Peter</h1><Link href="/user/">Ir para página do Peter</Link>
      </li>
    </ul>
  );
