function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
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
