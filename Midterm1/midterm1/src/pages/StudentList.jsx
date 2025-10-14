import React, {memo} from "react";
import StudentCard from "./components/StudentCard"
const StudentCard=memo(({students, searchStudent, deleteStudent})=>{
    return(
        <ul>
            {students.map((student)=>(
            <Task key = {student.id} student={student} searchStudent={searchStudent} deleteStudent={deleteStudent}></Task>))}
        </ul>
    );
});

export default StudentCard