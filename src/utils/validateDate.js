export const validateDate = (targetDate) => {
    const now = new Date();
    const date = new Date(targetDate);

    if(isNaN(date.getTime())){
        return {isValid: false, message: "Invalid date format"};
    }
    //difference in milliseconds
    const difference = date.getTime() - now.getTime();

    const maxDifference = 99 * 24 * 60 * 60 * 1000 //99 days in milliseconds

    if(difference > maxDifference) {
        return {isValid: false, message: "Selected time is more than 100 days"};
    }
    if(difference <= 0) {
        return {isValid: false, message: "Selected time must be in future"}
    }

    return {isValid: true, message: ""};
};