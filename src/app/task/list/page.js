// 'use client'

// const TaskList = ({ userId }) => {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//       fetch(`/api/tasks?user_id=${userId}`)
//         .then(response => response.json())
//         .then(data => setTasks(data));
//     }, [userId]);

//     return (
//       <div>
//         <h1>Tarefas</h1>
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>{task.name} - {task.status}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   export default TaskList;
'use client';

import { useState, useEffect } from 'react'; // Adicionando as importações corretas

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]); // Definindo o estado para armazenar as tarefas

  // Utilizando useEffect para carregar as tarefas quando o componente for montado ou quando o userId mudar
  useEffect(() => {
    fetch(`/api/tasks?user_id=${userId}`)
      .then((response) => response.json()) // Converte a resposta em JSON
      .then((data) => setTasks(data)); // Atualiza o estado com as tarefas
  }, [userId]); // O efeito será reexecutado toda vez que o userId mudar

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {/* Mapeando as tarefas e renderizando cada uma */}
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.status}
            </li>
          ))
        ) : (
          <li>Sem tarefas para exibir</li> // Exibindo mensagem caso não haja tarefas
        )}
      </ul>
    </div>
  );
};

export default TaskList;


