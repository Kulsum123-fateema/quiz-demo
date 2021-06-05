'use strict';




function check(){
    var c = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var text = document.getElementById('text');
    var quiz = document.getElementById("quiz");

    if(q1 == "1949"){c++}
    if(q2 == "Kerala"){c++}
    if(q3 == "2:3"){c++}
    if(q4 == "Bengali"){c++}
    if(q5 == "Bankimchandra Chatterjee"){c++}
     
        quiz.style.display="none"

        if(c <= 1){
            text.textContent =" your result is "  +  c  +  " Beter Luck Next Time";
        }else if (c <= 3) {
            text.textContent =" your result is "  +  c  + " Not Bad ";
            
        } else {
            text.textContent =" your result is "  +   c  +  "Congrats :)";

        }

       




    
}  