'use strict';
// Import math generators from randoms.js
import { 
    doubleDigitsAddition,
    doubleDigitsSubtraction,
    doubleDigitsSubtractionAdvanced,
    singleDevide,
    tripleDigitsAddition,
    tripleDigitSubtractionAdvanced,
    tripleMultiplication
} from './randoms.js';

// Global Variables
     let answer
     let randomNumber1 
     let randomNumber2 
     let randomNumber3
     let randomNumber4
     let score = 1;
     let highScore = 0;
    //  const score2 = score > 20 && score < 30 ? score > 40 && score < 50 ? 'Excellent' : 'Fantastic';

     let score2 = score > 3 && score < 20 ? score :''

     
     const scoreBoard = document.querySelector('.score');
     const highScoreBoard = document.querySelector('.highScore');
     const message1 =   document.querySelector('.message1')
     const message  = document.querySelector('.message');
     const restartGame = document.querySelector('.restartGame');
     const start = document.querySelector('.start');
    //  const restart = document.querySelector('.reset');
     const userInput = document.querySelector('input');
     const img = document.querySelector("img");

    var sound = {
        win: new Howl({
            src: ['sounds/win.mp3']
        }),
        win1: new Howl({
            src: ['sounds/win1.mp3']
        }),
        fail: new Howl({
            src: ['sounds/fail.mp3']
        }),
        gameOver: new Howl({
            src: ['sounds/game-over.mp3']
        })
        
    }
     

     const generateNum = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 + randomNumber2;
        message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
    }
    



    const generateNum2 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 > randomNumber2 ? randomNumber1 - randomNumber2 : randomNumber2 - randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1} ` + '- ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2} ` + '- ' + `${randomNumber1} = ` ;

        userInput.value = '';  


    }

    const generateNum3 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 10;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 + randomNumber2;
        message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
    }
        // double digits addition

    // moved to randoms.js: doubleDigitsAddition

    
        // double digits Subtraction

    // moved to randoms.js: doubleDigitsSubtraction

     // double digits Subtraction Borrowing 

    // doubleDigitsSubtractionAdvanced imported from randoms.js
    

// Triple Digit Addision
    // moved to randoms.js: tripleDigitsAddision



// Triple Digit Subtraction
    // moved to randoms.js: tripleDigitSubtractionAdvanced

// Single Digit Multiplication
    const generateNum6 = () => {                   
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;
        answer = randomNumber1 * randomNumber2;
        message1.innerText = `${randomNumber1} ` + ' * ' + `${randomNumber2} = ` ; 
        userInput.value = '';  
       
    }

// Single Digits Devision Yet to be implemented in If else statment
    const generateNum7 = () => {
                    
        let randomNumber1 = Math.floor(Math.random() * 10) + 1;
        let randomNumber2 = Math.floor(Math.random() * 10) + 1;

        answer = randomNumber1 > randomNumber2 ? randomNumber1 * randomNumber2 / randomNumber2 : randomNumber2 * randomNumber1/ randomNumber1;

        randomNumber1 > randomNumber2 ? message1.innerText = `${randomNumber1 * randomNumber2} ` + '/ ' + `${randomNumber2} = ` : message1.innerText = `${randomNumber2 * randomNumber1 } ` + '/ ' + `${randomNumber1} = ` ;
         userInput.value = '';  


    }




    const gameOver = () => {

        message.innerText = 'Game Over';
        message1.innerText = 'Game Over';
        restartGame.innerText = 'Play Again';
        start.style.display = 'none';
        restartGame.style.display = 'none';
        scoreBoard.innerText =  score;
        userInput.value = '';
        userInput.disabled = true;
        sound.gameOver.play()
        score = 0;
        setTimeout(dead, 1000);
        //setTimeout(hideImage, 8000);

    }

    //   document.querySelector('.restartGame').addEventListener('click',  function (){
    //     message.innerText = 'start...!';
    //     restartGame.style.display = 'none';
    //     start.style.display = 'block';
    //     scoreBoard.innerText = 1;
    //     score = 1
    //     userInput.disabled = false;
    //     generateNum();
       
    // }
        
    //     );

    // document.querySelector('.start').addEventListener('click',  function (){
    //     message.innerText = 'start...!';
    //     restartGame.style.display = 'none';
    //     scoreBoard.innerText = 1;
    //     score = 1
    //     userInput.disabled = false;
    //     generateNum();
    // }
        
    //     );

///START BUTTON FUNCTIONALITY
    start.addEventListener('click',  function (){
        message.innerText = 'Start...!';
        restartGame.style.display = 'block';
        start.style.display = 'none';
        scoreBoard.innerText = 1;
        score = 1
        userInput.disabled = false;
        answer = doubleDigitsAddition();
        // answer = doubleDigitsSubtractionAdvanced();
    // answer = tripleDigitSubtractionAdvanced();
        console.log('activated triple digit subtraction');
        // generateNumTripleDigitAddision() 
        //generateNumTripleDigitSubtraction();
       
    }
        
        );


/// RESRART GAME BUTTON FUNCTIONALITY
    document.querySelector('.restartGame').addEventListener('click',  function (){
        message.innerText = 'Press Start button...!';
        message1.innerText = '';  
        start.style.display = 'block';
        restartGame.style.display = 'none';
        userInput.value = '';  
        scoreBoard.innerText = 1;
        score = 1
        userInput.disabled = true;
       generateNum();  
       // generateNumTripleDigitAddision() 
       //generateNumTripleDigitSubtraction(); 
      
       
    }
        
        );

    //    Sound Functions
        function firstStageSound() {
            if(score > 1) {
                sound.win1.play()
            }
           
        }

        function secondStageSound() {
            
            if(score >= 20 && score <= 21 ) {
                sound.win.play()
                
            }
          
        }

        function thirdStageSound() {
            
            if(score >= 50 && score <= 51 ) {
                sound.win.play()
                
            }

            // Third and fouth game sound pending
          
        }

        // Emogi Functions
        function successImage() {
            img.src = 'img/good.jpeg';
        
        }
        function successImage2() {
            img.src = 'img/awersome.gif';
            //img.src = 'img/awe.jpeg';
            
            }
        function cry() {
            img.src = 'img/cry.jpeg';
            
                }
        function mag() {
            img.src = 'img/best2.jpeg';
                    
                }
        function dead() {
            img.src = 'img/dead.jpeg';
        }      

        function best() {
            img.src = 'img/best.jpeg';
                        
                }
        function hideImage() {
            img.src = '';
            
            }

        // setTimeout(function successImage() {
        //     img.src = 'img/good.jpeg';
        //     console.log('heheheh')
        //     // clearTimeout(1000);
        //     } , 1000)

  


    // Exported handler; wiring moved to main.js
    export function onCheckClick() {

        if (userInput.value === '') {
       
            message.innerText = 'Please enter a valid number!';

        } else if (parseInt(userInput.value) === answer && score < 3) {

                message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                firstStageSound();
                answer = doubleDigitsAddition();
                // generateNumTripleDigitAddision()
                //generateNumTripleDigitSubtraction();
                setTimeout(successImage, 1000);
                setTimeout(hideImage, 2000);
               // LEVEL 1
        
                } else if (parseInt(userInput.value) !== answer && score > 0 && score < 3) {       
                score -= 1;
                scoreBoard.innerText = score;
                message.innerText = 'Wrong !';
                sound.fail.play();
                answer = doubleDigitsAddition();
                //generateNum();
                // generateNumTripleDigitAddision()
                //generateNumTripleDigitSubtraction();
                setTimeout(cry, 1000);
                setTimeout(hideImage, 2000);
                


            } else if (parseInt(userInput.value) !== answer && score === 0)  
    
            {
                gameOver()    
        }  else if 
        (parseInt(userInput.value) === answer && score >= 3 && score <= 5)
 // LEVEL 2        // LEVEL 2   // LEVEL 2
        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                firstStageSound();
                secondStageSound();
                answer = doubleDigitsSubtraction();
                setTimeout(successImage2, 1000);
                setTimeout(hideImage, 2000);
            console.log('activated substracton')
            
        } else if (parseInt(userInput.value) !== answer && score  >= 3 && score <= 5) {   
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            answer = doubleDigitsSubtraction();
            setTimeout(cry, 1000);
            setTimeout(hideImage, 2000);
            


        } else if (parseInt(userInput.value) === answer && score >= 5 && score <= 8)

        // LEVEL 3        // LEVEL 3   // LEVEL 3
        {
            message.innerText = 'Correct!';
            score += 1;
            // FIX: typo coreBoard -> scoreBoard so UI updates and execution continues
            scoreBoard.innerText = score;
            firstStageSound();
            thirdStageSound();
            answer = doubleDigitsSubtractionAdvanced(); 
            setTimeout(mag, 1000);
             setTimeout(hideImage, 2000);
            

            
        } else if (parseInt(userInput.value) !== answer && score >= 5 && score <= 8) {   
            score -= 1;
            scoreBoard.innerText = score;
            message.innerText = 'Wrong !';
            sound.fail.play();
            answer = doubleDigitsSubtractionAdvanced();
            setTimeout(cry, 1000);
            setTimeout(hideImage, 2000);
            


        } else if (parseInt(userInput.value) === answer && score >= 8 && score <= 12)

// LEVEL 4        // LEVEL 4   // LEVEL 4
        {
            message.innerText = 'Correct!';
                score += 1;
                scoreBoard.innerText = score;
                secondStageSound();
                answer = tripleDigitsAddition();
                setTimeout(best, 1000);
                setTimeout(hideImage, 2000);

        } else if (parseInt(userInput.value) !== answer && score >= 8 && score <= 12) {
            score -= 1;
            scoreBoard.innerText = score;

            message.innerText = 'Wrong !';
            sound.fail.play();
            answer = tripleDigitsAddition();
            setTimeout(cry, 1000);
            setTimeout(hideImage, 2000);

        } else if (parseInt(userInput.value) === answer && score >= 12 && score <= 15)
//// level 5 level 5 level 5 level 5 level 5

            {
                message.innerText = 'Correct!';
                    score += 1;
                    scoreBoard.innerText = score;
                    firstStageSound();
                    answer = tripleDigitSubtractionAdvanced();
                    setTimeout(best, 1000);
                    setTimeout(hideImage, 2000);
               
                
            } else if (parseInt(userInput.value) !== answer && score >= 12 && score <= 15) {   
                score -= 1;
                scoreBoard.innerText = score;
    
                message.innerText = 'Wrong !';
                sound.fail.play();
                answer = tripleDigitSubtractionAdvanced();
                setTimeout(cry, 1000);
                setTimeout(hideImage, 2000);
    
            } else if (parseInt(userInput.value) === answer && score >= 15 && score <= 20)

//// level 6 level 6 level 6 level 6 level 6
                {
                    message.innerText = 'Correct!';
                        score += 1;
                        scoreBoard.innerText = score;
                        firstStageSound();
                        answer = singleMultiplication();
                        setTimeout(best, 1000);
                        setTimeout(hideImage, 2000);
                   
                    
                } else if (parseInt(userInput.value) !== answer && score >= 15 && score <= 20) {   
                    score -= 1;
                    scoreBoard.innerText = score;
        
                    message.innerText = 'Wrong !';
                    sound.fail.play();
                    answer = singleMultiplication();
                    setTimeout(cry, 1000);
                    setTimeout(hideImage, 2000);
        
                } else if (parseInt(userInput.value) === answer && score >= 20 && score <= 25)

//// level 7 level 7 level 7 level 7 level 7
                    {
                        message.innerText = 'Correct!';
                            score += 1;
                            scoreBoard.innerText = score;
                            firstStageSound();
                            answer = doubleMultiplication();
                            setTimeout(best, 1000);
                            setTimeout(hideImage, 2000);

                    } else if (parseInt(userInput.value) !== answer && score >= 20 && score <= 25) {
                        score -= 1;
                        scoreBoard.innerText = score;
            
                        message.innerText = 'Wrong !';
                        sound.fail.play();
                            answer = doubleMultiplication();
                        setTimeout(cry, 1000);
                        setTimeout(hideImage, 2000);
            
                    } else if (parseInt(userInput.value) === answer && score >= 25 && score <= 30)

//// level 8 level 8 level 8 level 8 level 8  here
                        {
                            message.innerText = 'Correct!';
                                score += 1;
                                scoreBoard.innerText = score;
                                firstStageSound();
                                answer = tripleMultiplication();
                                setTimeout(best, 1000);
                                setTimeout(hideImage, 2000);

                        } else if (parseInt(userInput.value) !== answer && score >= 25 && score <= 30) {
                            score -= 1;
                            scoreBoard.innerText = score;
                
                            message.innerText = 'Wrong !';
                            sound.fail.play();
                            answer = tripleMultiplication();
                            setTimeout(cry, 1000);
                            setTimeout(hideImage, 2000);
                
                        } else if (parseInt(userInput.value) === answer && score >= 30 && score <= 35)

//// level 9 level 9 level 9 level 9 level 9
                            {
                            message.innerText = 'Correct!';
                                score += 1;
                                scoreBoard.innerText = score;
                                firstStageSound();
                                answer = singleDevide();
                                setTimeout(best, 1000);
                                setTimeout(hideImage, 2000);

                            } else if (parseInt(userInput.value) !== answer && score >= 30 && score <= 35) {
                            score -= 1;
                            scoreBoard.innerText = score;
                
                            message.innerText = 'Wrong !';
                            sound.fail.play();
                            answer = singleDevide();
                            setTimeout(cry, 1000);
                            setTimeout(hideImage, 2000);
                    
                            } 





    













    
  

