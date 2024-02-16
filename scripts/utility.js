// hide element
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show element
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// set background color
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove background color
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    // console.log(elementValueText)
    const value = parseInt(elementValueText);
    console.log(value)
    return value;
}

function getElementTextByID(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomALphabet(){
    // create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwx';
    const alphabets = alphabetString.split('');
    
    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber); 

    // get alphabet by index
    const getAlphabet = alphabets[index];
    return getAlphabet;
}
