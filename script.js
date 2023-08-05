document.querySelector("button").addEventListener("click", gameStart);
function gameStart(){
    location.reload();
} 

const gameLog=[];
 
const gameScore=[];

//Hide the digits
// document.querySelectorAll(".number").classList.toggle("hide");



// 1. generate random number 1 to 9 for Number
 
var numberOfNumbers = document.querySelectorAll(".number").length;

for (var i = 0; i < numberOfNumbers; i++){
    var randomNumber=Math.floor(Math.random()*9+1); 
    
    document.querySelectorAll(".number")[i].textContent=randomNumber;

    }
    const numberInput1=document.getElementById('number1').innerHTML;
    const numberInput2=document.getElementById('number2').innerHTML;
    const numberInput3=document.getElementById('number3').innerHTML;
    const numberInput4=document.getElementById('number4').innerHTML;

    // 2. Escape repetitions of the numbers
    if (numberInput2===numberInput1||numberInput3===numberInput1||numberInput3===numberInput2||numberInput4===numberInput1||numberInput4===numberInput2||numberInput4===numberInput3){
        gameStart()
    }

    // 3. Create the 4-digit number for the gameLog
    console.log(numberInput1, numberInput2, numberInput3, numberInput4);
    const taskNumber=String(numberInput1)+String(numberInput2)+String(numberInput3)+String(numberInput4);
    // console.log(String(numberInput1)+String(numberInput2)+String(numberInput3)+String(numberInput4));

    // 4. Form to be submited by both ENTER press and Submit button

document.getElementById("guess1").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("submit").click();
        }
      });
document.querySelector("#submit").addEventListener("click", submit);

function submit(){  
//    GameLog creating
       var guessInput1 = document.getElementById('guess1').value.slice(0,1);
       var guessInput2 = document.getElementById('guess1').value.slice(1,2);
       var guessInput3 = document.getElementById('guess1').value.slice(2,3);
       var guessInput4 = document.getElementById('guess1').value.slice(3,4);
       console.log(guessInput1, guessInput2, guessInput3, guessInput4);

        gameLog.push(String(guessInput1)+String(guessInput2)+String(guessInput3)+String(guessInput4))
            var answer=String(guessInput1)+String(guessInput2)+String(guessInput3)+String(guessInput4)
            console.log(gameLog);

        var numberOfGuesses = document.querySelectorAll(".guess").length;
        
        
        for (var count = 0; count < numberOfGuesses; count++){
            y=0; //Amount of Numbers guessed

            if (guessInput1===numberInput1||guessInput1===numberInput2||guessInput1===numberInput3||guessInput1===numberInput4){
                y=y+1;
            }    

            if (guessInput2===numberInput1||guessInput2===numberInput2||guessInput2===numberInput3||guessInput2===numberInput4){
                y=y+1;
            }  

            if (guessInput3===numberInput1||guessInput3===numberInput2||guessInput3===numberInput3||guessInput3===numberInput4){
                y=y+1;
            }  

            if (guessInput4===numberInput1||guessInput4===numberInput2||guessInput4===numberInput3||guessInput4===numberInput4){
                y=y+1;
            }   
     
            if (guessInput2===guessInput1||guessInput2===guessInput3||guessInput2===guessInput4||guessInput3===guessInput1||guessInput3===guessInput4||guessInput4===guessInput1){
                alert("Try again. digits should not be repeated or null!")
                y="?"
            }
            else{
                y=y+0;
        
            }}
                console.log(y);
                document.getElementById('resultNumber').innerHTML=y;
 
            for (var count1 = 0; count1 < numberOfGuesses; count1++){
                x=0; //Amount of Numbers guessed

                if (guessInput1===numberInput1){
                    x=x+1;
                }    
    
                if (guessInput2===numberInput2){
                    x=x+1;
                }  
    
                if (guessInput3===numberInput3){
                    x=x+1;
                }  
    
                if (guessInput4===numberInput4){
                    x=x+1;
                }  
                if (guessInput2===guessInput1||guessInput2===guessInput3||guessInput2===guessInput4||guessInput3===guessInput1||guessInput3===guessInput4||guessInput4===guessInput1){
                        x="?"}
                else{
                    x=x+0;
            
                }}
                    console.log(x);
                    document.getElementById('resultPosition').innerHTML=x;
                    gameScore.push((String(y)+":"+String(x)));
                    console.log(gameScore);

                        let text = "<ol>";
                        for (let i = 0; i < gameLog.length; i++) {
                        text += "<li>" + gameLog[i] + "</li>";
                        }
                        text += "</ol>";

                    document.getElementById('attempt').innerHTML=text;
                        let text1 = "<ul>";
                        for (let i = 0; i < gameScore.length; i++) {
                        text1 += "<li>" + gameScore[i] + "</li>" ;
                        }
                        text1 += "</ul>";
                        audioAdd();

                        function audioAdd(){
                        file=document.getElementById("enterDigits")
                        file.play();
                        }
                    document.getElementById("form").reset();
                    document.getElementById('score').innerHTML=text1;
                    
                if (answer===taskNumber){
                    setTimeout(youWin, 1500);
                   
                }
            //   You Win statement in the case of victory

         function youWin(){   document.getElementById('win').innerHTML="Correct! You win";

         var x = document.getElementById("win");
         x.setAttribute("src", "images/youwin.jpg");
         x.setAttribute("alt", "The Pulpit Rock");
            console.log("Correct! you win");
            audioWin();

            function audioWin(){
            file=document.getElementById("myAudio")
            file.play();
            }
            }
                
}

           
            
   
            
        






    



// var randomNumber2=Math.floor(Math.random()*9+1); // generate random number 1 to 9 for Number2
   
// //condition below does not work

// // for (var i = 0; i < 10; i++) {
//     //     if (randomNumber2!=randomNumber1){
//     //         document.querySelector("#number2").textContent=randomNumber2;
//     //     }}


// var randomNumber3=Math.floor(Math.random()*9+1); // generate random number 1 to 9 for Number3
// document.querySelector("#number3").textContent=randomNumber3;

// var randomNumber4=Math.floor(Math.random()*9+1); // generate random number 1 to 9 for Number4
// document.querySelector("#number4").textContent=randomNumber4;
// }




