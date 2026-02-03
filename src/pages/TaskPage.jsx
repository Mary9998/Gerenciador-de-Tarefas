import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get ("title")
    const description = searchParams.get ("description")
    return (
        <div className= "h-screen w-screen bg-pink-100 p-6 flex justify-center">
        
        <div className="w-[500px] space-y-4 ">
          <div className="flex justify-center relative mb-6" >
            <button className="absolute left-0 top-0 bottom-0 text-pink-900"
            onClick={() => navigate(-1)} >
                <ChevronLeftIcon/>
            </button>
            <h1 className="text-3xl text-pink-700 font-bold text-center">
            Detalhes da Tarefa
            </h1>
          </div>
          
          <div className="space-y-4 p-6 bg-pink-300 rounded-md shadow">
            <h2 className=" text-xl font-bold text-pink-800">{title}</h2>
            <p className="text-pink-900">{description}</p>
          </div>

        </div>
       </div>
    );
}

export default TaskPage