import axios from 'axios';
import PropTypes from 'prop-types';
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import {baseURL} from '../utils/constant.js';




const ToDo = ({ text, id , setUpdateUI ,setShowPopup ,setpopupContent}) => {

  const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then(res => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setpopupContent({text , id})
    setShowPopup(true)
  }

  ToDo.propTypes = {
    text: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    setUpdateUI:PropTypes.func.isRequired,
    setShowPopup:PropTypes.func.isRequired,
    setpopupContent:PropTypes.func.isRequired
    
        };
  return (
    <div className='toDo'>
    { text }
      <div className='icons'>
        <AiFillEdit  className='icon' onClick={updateToDo}/>
        <RxCross1  className='icon' onClick={deleteToDo}/>
    </div>
    
   
      
    </div>
    
  )
}

export default ToDo
