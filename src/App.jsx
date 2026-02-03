import { useEffect, useState } from "react";
import AddTasks from "./componets/AddTasks";
import Tasks from "./componets/Tasks";



function App() {
 const [tasks, setTasks] = useState(
  JSON.parse(localStorage.getItem("tasks")) || []
 );

 useEffect(() => {
  localStorage.setItem("tasks",  JSON.stringify(tasks))
 }, [tasks]);

 

    function onTaskClick(tasksId) {
      const newTasks = tasks.map(tasks => {
        //preciso atualizar essa tarefa
        if (tasks.id == tasksId){
          return {...tasks, isCompleted: !tasks.isCompleted }

        }

        //não preciso atualizar esta tarefa
          return tasks;
      });

      setTasks(newTasks);
    }

    function onDeleteTaskClick (tasksId) {
      const newTasks = tasks.filter(tasks => tasks.id !== tasksId);
      setTasks(newTasks);

    }

    function onAddTaskSubmit (title, description) {
      const newTasks = {
        id: tasks.length + 1,
        title: title,
        description: description,
        isCompleted: false
        
      };

      setTasks ([...tasks, newTasks])

    }



 return(
  
  <div className="w-screen h-screen bg-pink-100 flex justify-center p-6">
   <div className="w-[500px] space-y-4 ">
    <h1 className="text-3xl text-pink-400 font-bold text-center">Gerenciador de Tarefas</h1>
   <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
   <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick } />
   
   </div>
 </div>
 );
}

export default App;