
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();    
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log('Invalid response recieved');
    }
};

console.log(getUserChoice("Rock"));