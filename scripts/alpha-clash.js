// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    // player pressed key
    const playerPressed = event.key;

    // expected key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();    
    console.log(expectedAlphabet, playerPressed)

    // checked
    if(playerPressed === expectedAlphabet){
        console.log("win");
        // get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
         
        // set new score
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        // get current life
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // reduce currentlife
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            console.log("fuck")
            gameOver();
        }
    }

    
}
// capture keyboard key-press
document.addEventListener('keyup', handleKeyboardButtonPress)

// playing game / continue game
function continueGame(){
    const alphabet = getARandomALphabet();
    
    // show randomly alphabet to the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('score')
    showElementById('playground');
    continueGame()
}   

function gameOver(){
    hideElementById('playground')
    showElementById('score');
}