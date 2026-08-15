let buttons = document.querySelectorAll(".choice");
let winmsg = document.querySelector("#winmsg");
let newgame = document.querySelector("#newgame");
let turns = document.querySelector("#turns");

const compchose = () =>{
    let options= ["ROCK","PAPER","SCISSORS"];
    let randomIndex = Math.floor(Math.random() * options.length);
    let compChoice = options[randomIndex];
    turns.innerText = `Computer chose ${compChoice}`;
    return compChoice;
}
let userchoice;
let compChoice;
for(let button of buttons){
    button.addEventListener("click",() =>{
        userchoice=button.innerText;
        compChoice = compchose();
        btndisable();
        //console.log(`Bot chose ${compChoice}`);
        if(userchoice==="ROCK" && compChoice==="PAPER")
            winner("BOT");
        if(userchoice==="PAPER" && compChoice==="ROCK")
            winner("USER");
        if(userchoice==="ROCK" && compChoice==="SCISSORS")
            winner("USER");
        if(userchoice==="SCISSORS" && compChoice==="ROCK")
            winner("BOT");
        if(userchoice==="PAPER" && compChoice==="SCISSORS")
            winner("BOT");
        if(userchoice==="SCISSORS" && compChoice==="PAPER")
            winner("USER");
        if(userchoice=="ROCK" && compChoice=="ROCK" || userchoice=="PAPER" && compChoice=="PAPER" || userchoice=="SCISSORS" && compChoice=="SCISSORS")
            winner("NONE");
        newgame.classList.remove("hidden");
    })
};

function winner(result) {
    winmsg.classList.remove("hidden");
    if (result === "USER") {
        winmsg.innerText = "YOU WON!";
    } else if (result === "BOT") {
        winmsg.innerText = "YOU LOSE!";
    } else if (result === "NONE") {
        winmsg.innerText = "IT'S A TIE";
    }
};


function btndisable(){
    for(let button of buttons){
        button.disabled=true;
    }
};
function btnenable(){
    for(let button of buttons){
        button.disabled=false;
    }
};

newgame.addEventListener("click", () =>{
    btnenable();
    turns.innerText = "Your Turn";
    newgame.classList.add("hidden");
    winmsg.classList.add("hidden");
});