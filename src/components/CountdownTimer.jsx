import React,{useState,useEffect} from 'react';
import {Container,Box, Typography} from '@mui/material';
import TimeInput from "./TimeInput";
import CountdownDisplay from './CountdownDisplay';
import ControlButtons from './ControlButtons';
import {calculateTimeLeft} from "../utils/calculateTimeLeft";
import 'bootstrap/dist/css/bootstrap.min.css';
import notificationSound from "../sounds/notification.mp3"


const CountdownTimer = () => {
    const [targetDate, setTargetDate] = useState('');
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [isCountdownOver, setIsCountdownOver] = useState(false);

   useEffect(() => {
    const storedTargetdate = localStorage.getItem("targetDate");
    if(storedTargetdate) {
        setTimeout(() => {
            setTargetDate(storedTargetdate);
            setIsActive(true);
        }, 500);
    }
   },[]);

    useEffect(() => {
        if(isActive) {
            const timer = setInterval(() => {
                const newTimeLeft = calculateTimeLeft(targetDate);
                setTimeLeft(newTimeLeft);
                if(Object.keys(newTimeLeft).length === 0) {
                        clearInterval(timer);
                        setIsActive(false);
                        setIsCountdownOver(true);
                        const audio = new Audio(notificationSound);
                        audio.play();
                        setTargetDate("");
                    }
            }, 1000);
            return () => clearInterval(timer);
        }
        // eslint-disable-next-line
    },[isActive, targetDate]);

    useEffect(() => {
        localStorage.setItem("targetDate",targetDate);
    })

    const handleStart = () => {
        if(isValid && targetDate !== '') {
            setIsActive(true);
            setIsCountdownOver(false);
        }else {
            setErrorMessage("Please select a valid date and time")
        }
    }

    const handleCancel = () => {
        setIsActive(false);
        setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });
        setTargetDate("");
        setErrorMessage("");
        setIsCountdownOver(false);
    };

  return (
   <Container >
    <Box display="flex"
    flexDirection="column"
    alignItems="center" mt="1.5vh"
    >
    <TimeInput targetDate={targetDate} setTargetDate={setTargetDate} setIsValid={setIsValid} setErrorMessage={setErrorMessage}/>
    <ControlButtons handleStart={handleStart} handleCancel={handleCancel} isActive={isActive} />
    {errorMessage ? (
        <Typography mt={2} color="#8f0ab0" fontWeight="bold" fontSize="3vh">{errorMessage}</Typography>
    ) : isCountdownOver ? (
        <Typography mt={2} color="#8f0ab0" fontWeight="bold" fontSize="3vh">The countdown is over! What's next on your adventure?</Typography>
    ) : (
        <CountdownDisplay timeLeft={timeLeft} />
    )}
    </Box>
   </Container>
  )
}

export default CountdownTimer
