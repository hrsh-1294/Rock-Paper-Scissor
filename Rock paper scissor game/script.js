let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper","scissors"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];

}
const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "rgb(23, 136, 144)";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        console.log("You win!!");
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";

       
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose.");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";

    } 
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //compchoice = paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "scissors"){
            //compchoice = paper or rock
            userWin = compChoice === "paper" ? true : false;
        }
        else if( userChoice === "paper"){
            //compchoice = rock or scissors
            userWin = compChoice === "rock" ? true: false;
        }
        showWinner(userWin, userChoice, compChoice); 
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

