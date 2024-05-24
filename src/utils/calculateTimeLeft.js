export  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};

    if(difference > 0) {
        timeLeft = {
            days: Math.min(Math.floor(difference / (1000 * 60 * 60 * 24)), 99),
            hours: Math.min(Math.floor((difference / (1000 * 60 * 60)) % 24), 23),
            minutes: Math.min(Math.floor((difference / 1000 / 60) % 60), 59),
            seconds: Math.min(Math.floor((difference / 1000) % 60), 59)
        };
    }
    return timeLeft;
};