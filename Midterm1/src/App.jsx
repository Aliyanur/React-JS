import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {StudentCards} from './components/StudentCards';
import { StudentList } from './pages/StudentList';
import { FormikFormHook } from './pages/AddStudent';

function App(){
  const [students, setStudent] = useState([]);
  const inputRef = useRef(null);

  const addStudent=useCallback(()=>{
    const text= input.current.value.trim();
    if(text !== ""){
      const newStudent ={id:Date.now(), text, completed:false};
      setStudent([...students, newStudent]);
      inputRef.current.value=''
      inputRef.current.focus();
    }
  }, [students]);

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentCards/>} >
        <Route path='/students ' element={<StudentList/>} />
        <Route path='/add-student ' element={<FormikFormHook/>} />
      </Route>
      
    </Routes>
   </BrowserRouter>

      );
  }
export default App
