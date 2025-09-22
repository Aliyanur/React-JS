import React, {memo} from "react";
import Task from "./Task"
const TaskList=memo(({tasks, toggleTask, deleteTask})=>{
    return(
        <ul>
            {tasks.map((task)=>(
            <Task key = {task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask}></Task>))}
        </ul>
    );
});

export default TaskList