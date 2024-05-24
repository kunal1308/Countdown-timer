import React from 'react';
import { validateDate } from '../utils/validateDate';

const TimeInput = ({targetDate, setTargetDate, setIsValid, setErrorMessage}) => {

  const handleChange = (e) => {
    const value = e.target.value;
    setTargetDate(value);
console.log(value)
    const validation = validateDate(value);
    setIsValid(validation.isValid);
    setErrorMessage(validation.message);
  };
  return (
    <div style={{maxWidth:"100%",width:"50%"}}>
        <input 
        id="targetDate"
        type='datetime-local'
        value={targetDate}
        onChange={handleChange}
        style={{width: "12vw", fontSize:"1.1vw",height:"5vh", background:"none",color:"white",border:"1.5px solid #fff",borderRadius:"4px", paddingLeft:"0.5vw"}}
        />
        </div>
  );
};

export default TimeInput
