import { useState } from 'react';
import { FormikFormHook } from './components/FormikFormHook';
import './App.css';

function App(){
  const [data, setData] = useState({email: '', password: ''})
  console.log(data)

  return(
    <>
    <FormikFormHook/>
    </>
  )
}
export default App
