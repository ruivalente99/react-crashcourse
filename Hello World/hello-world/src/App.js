import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks,setTasks] = useState(
    [
    {
        id: 1,
        text: 'hello',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'World',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])
// Delete Tasks
const deleteTask = (id) => {
 setTasks(tasks.filter((tasks) => tasks.id!==id))
}

  return (
    <div className="container">
      <Header title='To Do'/>
      {tasks.length>0 ?
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      :
      'No tasks to show'
      }
    </div>
  );
}

export default App;
