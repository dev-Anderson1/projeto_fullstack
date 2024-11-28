'use client'

const TaskList = ({ userId }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch(`/api/tasks?user_id=${userId}`)
        .then(response => response.json())
        .then(data => setTasks(data));
    }, [userId]);

    return (
      <div>
        <h1>Tarefas</h1>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.name} - {task.status}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default TaskList;
