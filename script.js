// let rockbtn = document.querySelector("#rockbtn");
// let paperbtn = document.querySelector("#paperbtn");
// let scibtn = document.querySelector("#scibtn");
let buttons = document.querySelectorAll(".choice");
// for(let button of buttons){
//     console.log(button.innerText);
// }
let user=true;
for(let button of buttons){
    button.addEventListener("click",() =>{
        //console.log(button.innerText);
        if(user){
        let userchoice=button.innerText;
        console.log(userchoice);
        user=false;
        }
        else{
            console.log("Computer's turn");
            user=true;
        }
    })
};
