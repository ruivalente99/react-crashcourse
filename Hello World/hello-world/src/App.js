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
  return (
    <div className="container">
      <Header title='To Do'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
