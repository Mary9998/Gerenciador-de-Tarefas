import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  const navigate = useNavigate ();

   function onSeeDetailsClick(tasks) {
    const query = new URLSearchParams()
    query.set ("title", tasks.title)
    query.set ("description", tasks.description)
    navigate (`/tasks?${query.toString()}`);
   }
    
    return  <ul className="space-y-4 p-6 bg-pink-300 rounded-md shadow">
          {tasks.map((tasks) => 
          <li key={tasks.id} className="flex gap-2">
             <button onClick={() => onTaskClick(tasks.id)} 
             className={`bg-pink-400 text-white p-2 rounded-md w-full text-left ${tasks.isCompleted && 'line-through'}`}>
                {tasks.title}
                
            </button>
            <Button onClick={() => onSeeDetailsClick(tasks)}>
             <ChevronRightIcon /> 
            </Button>

            <Button
            onClick={() => onDeleteTaskClick(tasks.id)}>
             <TrashIcon /> 
            </Button>
            
          </li>)}
        </ul>; 
}

export default Tasks;