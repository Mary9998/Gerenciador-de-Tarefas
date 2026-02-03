function Input(props)  {
    return(
        <input 
         type={props.type}
         placeholder={props.placeholder} 
         className="border-pink-900 outline-pink-800 px-4 py-2 rounded-md" 
         value={props.value}  
         onChange={props.onChange}
     />

        
    );

}

export default Input;