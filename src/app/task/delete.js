'use client'

const deleteTask = (id) => {
    fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    }).then(() => {
      // Atualizar a lista de tarefas
      setTasks(tasks.filter(task => task.id !== id));
    });
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name} <button onClick={() => deleteTask(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
