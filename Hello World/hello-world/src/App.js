import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask,setShowAddTask] = useState(false);
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
//Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000)+1
  const newTask = { id,...task}
  setTasks([...tasks, newTask])
}

// Delete Tasks
const deleteTask = (id) => {
 setTasks(tasks.filter((tasks) => tasks.id!==id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task,reminder:!task.reminder}:task) )
}


  return (
    <div className="container">
      <Header 
        title='To Do' 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      /> 
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?
      <Tasks tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
      :
      'No tasks to show'
      }
    </div>
  );
}

export default App;
