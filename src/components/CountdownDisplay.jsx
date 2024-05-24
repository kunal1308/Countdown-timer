import React from 'react';
import {Box,Typography} from "@mui/material";

const CountdownDisplay = ({timeLeft}) => {
  return (
  <Box mt={4} width="50%" display='flex' flexDirection= 'row' fontSize="2vw" alignItems="center">
    {Object.keys(timeLeft).map((unit,index) => (
            <Box key={index} textAlign='center' m={0.5} p={2} style={{background: "linear-gradient(to top right,  #df19cb, #2090f3)"}} border='1px solid #ccc' borderRadius='6px' width="25%">
                <Typography variant='h4' color="white" style={{fontWeight:"bold",display:"flex", justifyContent:"center"}}>{timeLeft[unit]}</Typography>
                <Typography variant='subtitle' color="lightgray" style={{fontWeight:"bold",display:"flex", justifyContent:"center"}}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</Typography>
            </Box>
    ))}
    </Box>
  );
};

export default CountdownDisplay
