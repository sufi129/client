import  { useEffect, useState } from 'react';
import ToDo from './component/ToDo';
import axios from 'axios';
import {baseURL} from './utils/constant.js';
import Popup from './component/Popup.jsx';

const App = () => {

    const [toDos, setTodoList] = useState([]);
    const [input, setInput] = useState("");
    const [updateUI, setUpdateUI] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [popupContent, setpopupContent] = useState({})

   useEffect(() => {
    axios
    .get(`${baseURL}/get`)
    .then((res) => setTodoList(res.data))
    .catch((err) => console.log(err))
    },[updateUI]);

    const saveToDo = () => {
      axios
        .post(`${baseURL}/save`, { toDo: input })
        .then((res) => {
          console.log(res.data);
          setUpdateUI((prevState) => !prevState)
          setInput("");
        })
        .catch((err) => console.log(err));
    };

   

  return (
    <main>
      <div className='container'>
        <h1 className='title'>ToDo App</h1>

        <div className='input_holder'></div>
          <input 
          value = {input} 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder='Add a todo'/>
          <button onClick={saveToDo}>Add</button>

        <div className='list'>
        {toDos.map((el) => (
        <ToDo 
        key = {el._id} 
        text={el.toDo} 
        id= {el._id} 
        setUpdateUI={setUpdateUI}
        setShowPopup= {setShowPopup}
        setpopupContent = {setpopupContent}
         /> ))}
      
        </div>

      </div>
     { showPopup && <Popup  
     setShowPopup={setShowPopup}      popupContent = {popupContent}     setUpdateUI = {setUpdateUI} />}
    </main>
    
  )
}
export default App
