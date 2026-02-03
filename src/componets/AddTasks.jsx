import  Input  from "./Input";
import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
 return (
    <div className="space-y-4 p-6 bg-pink-300 rounded-md shadow flex flex-col">

    <Input
    type="text" 
    placeholder="Digite o Titulo da tarefa" 
    value={title} 
    onChange={(event) => setTitle(event.target.value)}
     />

    <Input
    type="text" 
    placeholder="Digite a descrição da tarefa"  
    value={description}  
    onChange={(event) => setDescription(event.target.value)}
     />

    


    <button onClick={() => {
      //verificar se o titulo e a descrição estão preenchidos
      if (!title.trim() || !description.trim()) {
         return alert("Preencha o título e a descrição da tarefa");
      }
      onAddTaskSubmit(title, description)
      setTitle("");
      setDescription("");
    }} 
    className="bg-pink-500 text-white px-4 py-2 rounded-md font-medium"
    >
       Adicionar
    </button>
 </div>

 );
} 

export default AddTasks;