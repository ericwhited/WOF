var hintArea = document.getElementById('hintArea')
var letterArea = document.getElementById('letterArea')
var usedLetters = document.getElementById('usedLetters')
var letters = document.getElementsByClassName('buttons')
var wordsArray = [];
var lives

class wordBank {

    constructor(word, hint) {
        this.word = word
        this.hint = hint
        // adds a word and a hint to the word bank
        wordsArray.push(this)
    }
}

// Creating words & hints
var word1 = new wordBank('phone', 'never leaves my side')
var word2 = new wordBank('shoes', 'Favorite item to shop for')
var word3 = new wordBank('dog', 'fav animal')

setTimeout(startGame(),1000)

function startGame() {
    lives = 3;
    generateWord();

    function generateWord() {
        for(i = 0; i < letters.length; i++) {
            letters[i].disabled = false
        }

        guessedLetters = [];
        usedLetters.innerHTML = ""
        // helps pick a random word
        randomNum = Math.floor(Math.random() * Math.floor(wordsArray.length));
        // picking a word out of the array 
        actualWord = wordsArray[randomNum].word.split("")
        // maps word into underscores
        hiddenWord = actualWord.map(function(x){return "_"})
        // joins area of underscores into a word
        letterArea.innerHTML = hiddenWord.join(" ")
        // grabs hint from wordbank
        hintArea.innerHTML = wordsArray[randomNum].hint


    }

    for (let i=0; i < letters.length; i++) {
        letters[i].addEventListener("click", function(){
            if(guessedLetters.includes(letters[i].value)){

            }else {
                if(actualWord.includes(letters[i].value.toLowerCase())) {
                    for(let j = 0; j < actualWord.length; j++) {
                        if(actualWord[j] === letters[i].value.toLowerCase()) {
                            hiddenWord.splice(j,1,letters[i].value);
                        }
                    }
                    letterArea.innerHTML = hiddenWord.join(" ")

                }else {
                    lives--;
                    if(lives==0){
                        lose();
                    }
                } 
                guessedLetters.push(letters[i].value);
                usedLetters.innerHTML = guessedLetters.join(", ");
                letters[i].disabled = true;
            }
            if(hiddenWord.includes('_')==false){
                win();
            }
        })
    }
}

function win() {
    setTimeout(function(){alert('You winnnnnnn');}, 1000);
    setTimeout(startGame(), 3000);
}

function lose() {
    setTimeout(function(){alert('You suck');}, 1000);
    setTimeout(startGame(), 3000);
}
