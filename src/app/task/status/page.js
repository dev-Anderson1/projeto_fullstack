// 'use client'

// const changeTaskStatus = (id, status) => {
//     fetch(`/api/tasks/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ status }),
//     }).then(response => response.json());
//   };

//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>
//           {task.name} - {task.status}
//           <button onClick={() => changeTaskStatus(task.id, 'Em Execução')}>Iniciar</button>
//           <button onClick={() => changeTaskStatus(task.id, 'Finalizada')}>Concluir</button>
//         </li>
//       ))}
//     </ul>
//   );
  'use client';

  import { useState, useEffect } from 'react'; // Certifique-se de importar useState e useEffect
  
  const TaskList = ({ userId }) => {
    const [tasks, setTasks] = useState([]); // Definindo o estado para as tarefas
  
    // Buscar as tarefas do usuário ao carregar o componente
    useEffect(() => {
      fetch(`/api/tasks?user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => setTasks(data));
    }, [userId]); // Reexecuta sempre que o userId mudar
  
    const changeTaskStatus = (id, status) => {
      fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      }).then(response => response.json())
        .then((updatedTask) => {
          // Atualiza o estado após a mudança de status
          setTasks(prevTasks =>
            prevTasks.map(task =>
              task.id === updatedTask.id ? updatedTask : task
            )
          );
        });
    };
  
    return (
      <div>
        <h1>Tarefas</h1>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.name} - {task.status}
              <button onClick={() => changeTaskStatus(task.id, 'Em Execução')}>Iniciar</button>
              <button onClick={() => changeTaskStatus(task.id, 'Finalizada')}>Concluir</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;
  