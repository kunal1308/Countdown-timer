import React from 'react';
import { Button,Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const ControlButtons = ({handleStart,handleCancel,isActive}) => {
  return (
    <Box mt={2}>
    {!isActive ? (
        <Button variant='contained'
        color='primary'
        onClick={handleStart}
        style={{fontSize:"0.9vw",width:"100%",border:"1.5px solid #fff",background:"none"}}
        >
            Start Timer
        </Button>
    ):(<Button variant='contained'
    color='secondary'
    onClick={handleCancel}
    style={{fontSize:"0.9vw",width:"100%",border:"1.5px solid #fff",background:"none",}}>
        Cancel Timer
    </Button>)}
 </Box>
  )
}

export default ControlButtons
