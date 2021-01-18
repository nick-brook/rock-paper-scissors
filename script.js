let score = {player:0,
            computer:0};
let gameFinished = false;

    // buttons is a node list similar to array
    const buttons = document.querySelectorAll('button');
    const outcome = document.createElement("h1");
    const playerDispScore = document.createElement('p');
    const computerDispScore = document.createElement('p');
    const playAgain = document.createElement('button');
    const gameOver = document.createElement("h1");
    
    playAgain.addEventListener('click',gameReset)    

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {clickFunc(e)})
        });

    //  reset scores, remove play again btn, scores and gameover elements
    function gameReset() {
        score.player = 0;
        score.computer = 0;
        results.removeChild(gameOver);
        results.removeChild(playAgain);
        results.removeChild(outcome);
        results.removeChild(playerDispScore);
        results.removeChild(computerDispScore);
        gameFinished = false
    }
        
    function clickFunc(e) { 
        outcome.textContent = game(e.target.id);

        if (gameFinished){
            gameReset()
        }
        else {
        outcome.style.color = "red";
        playerDispScore.textContent = 'Your Score: ' + score.player;
        computerDispScore.textContent = 'Computer Score: ' + score.computer;
        results.appendChild(outcome);
        results.appendChild(playerDispScore);
        results.appendChild(computerDispScore);

        if (score.player == 5){
            scoreIsFive('P')
            }

        if (score.computer == 5){
            scoreIsFive('C')
            }
        }
    };

    function scoreIsFive(winner){

        let endText = ''
        if (winner === "P"){
            endText = 'Game Over - You are a WINNER!'
            }
            else{
                endText = 'Game Over - You lose!'
            }
        gameOver.textContent = endText
        playAgain.textContent = "Play Again?"
        playAgain.id = "play";
        results.appendChild(gameOver);
        results.appendChild(playAgain);
        gameFinished = true
    }
            
    function game (playerSelection){

        // get computer selection
        let computerSelection = computerPlay();

        // choose winner and display results
        return chooseWinner(playerSelection,computerSelection)
    }

    function chooseWinner(playerChoice,computerChoice){

        // its a draw
            if (playerChoice === computerChoice){
                return 'Its a draw! Try again....'
            }
                
        // player enters rock 
            if (playerChoice === "rock"){
                //compare computer choice
                if (computerChoice === "paper"){
                    return lose(computerChoice,playerChoice)
                }
                else    
                    {return win(computerChoice,playerChoice)
                    }
                }

            // player enters paper
            if (playerChoice === "paper"){
                //compare computer choice
                if (computerChoice === "scissors"){
                    return lose(computerChoice,playerChoice)}
                else    
                    {return win(computerChoice,playerChoice)
                    }
                }
                
            // player enters scissors
            if (playerChoice === "scissors"){
                //compare computer choice
                if (computerChoice === "rock"){
                    return lose(computerChoice,playerChoice)}
                else    
                    {
                    return win(computerChoice,playerChoice)
                    }
                }
            }

    function lose(computerChoice,playerChoice){
        score.computer ++
        return "Oops you lost " + computerChoice + " beats " + playerChoice
        }

    function win(computerChoice,playerChoice){
        score.player ++
        return "Yippee you won " + playerChoice + " beats " + computerChoice
        }

    function computerPlay(){
        // object with 3 possible answers
        let answerObj =   {1:"rock",
                            2: "paper",
                            3: "scissors",
                            }

        // get random number between 1 and 3
        let num = Math.floor((Math.random() * 3) + 1);

        return answerObj[num]
        }
        