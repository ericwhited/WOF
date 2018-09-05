/*
word = 'tree'

give values to the buttons on the page. each one reps a letter. 



when pushing a button on the page {
    check if the value of that button is == a letter in the word.
    - use includes() ? 

    if it is ...
        reveal the letter on the board
    if it is not...
        give a strike
    

strikes == 0

gameOver = false

if(srikes ==3) {
    gameOver = true
} else {
    gameOver = false
    }
}


*/





// $('.buttons').click(function() {
//     for(i=0; i<word.length; i++) {
//         if($(this).text() == word[i]) {
//             $('.letterBox')[i].innerHTML = $(this).text();
//             incorrect = false;
//         } else {
//             incorrect = true;
//         }
//     }