import React, {memo} from "react";

const Task=memo(({task, toggleTask,deleteTask})=>{
    return(
        <li className={task.completed ? "completed": ""}>
        <input type="checkbox" checked={task.completed} onChange={()=> toggleTask(task.id)}></input>
        <span>{task.text}</span>
        <button onClick={()=> deleteTask(task.id)}>Delete</button>
        </li>
    );
});
export default Task;