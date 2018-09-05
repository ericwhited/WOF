$(document).ready(function() {

// var incorrect = 0;
var word = ['T', 'R', 'E', 'E'];
// var strikes = 0;
// var incorrect = false;



$('.buttons').click(function() {
    var found = false;
    var strikes = 0;
    for(i=0; i<word.length; i++) {
        // if the button I push is = to any of the letters in word
       if($(this).text() == word[i]) {
           found = true;
        //    change the letter box to that letter
            $('.letterBox')[i].innerHTML = $(this).text();
        }
    }
        





    
if(found == false) {
    $('.chance')[0].style = 'color: red;'
    strikes = strikes++;
    console.log(strikes);
}


    
})


    // if(incorrect == true) {
    //     alert('incorrect');
    //     strikes = strikes+1
    //     // console.log(strikes);
    // }
    



})

