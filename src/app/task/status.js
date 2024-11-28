'use client'

const changeTaskStatus = (id, status) => {
    fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    }).then(response => response.json());
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name} - {task.status}
          <button onClick={() => changeTaskStatus(task.id, 'Em Execução')}>Iniciar</button>
          <button onClick={() => changeTaskStatus(task.id, 'Finalizada')}>Concluir</button>
        </li>
      ))}
    </ul>
  );
