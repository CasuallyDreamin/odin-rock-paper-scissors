let score = 0;

function getComputerChoice() {
    const choice_index = parseInt(Math.random()*10 % 3)
    choices = ['Rock', 'Paper', 'Scissor']
    
    return choices[choice_index]
}

const rock_button = document.querySelector("#rock")
rock_button.addEventListener("click",()=>
    playRound("Rock"));

const paper_button = document.querySelector("#paper")
paper_button.addEventListener("click",()=>
    playRound("Paper"));    

const scissor_button = document.querySelector("#scissor")
scissor_button.addEventListener("click", ()=>
    playRound("Scissor"));    

function playRound(human) {
    const computer = getComputerChoice()
    if (human === computer) score += 1 
    else score -= 1;
    updateView(computer)    
}

function updateView(cpc) {
    scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.textContent = String(score)
    cpc_field = document.getElementById("cpc")
    cpc_field.textContent = cpc
}