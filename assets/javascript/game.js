
    var loss = 0;
    var wins = 0;
    var lives = 10;
    var usedLetters = [];
    
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    function reset(){
        lives = 10;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        usedLetters = []
    }

    function playAgain(){
        var play = confirm("Would you like to play again?")
        if (play){
            reset();
        }
        else{
            alert("See you next time!");
        }

    }


    //Game Logic
    
        document.onkeyup = function (event) {
        
            var userGuess = event.key;

            usedLetters.push(userGuess);

            if (computerGuess === userGuess) {
                wins++
                alert("You won the game!");
                playAgain();
            }
            else if (lives > 1){
                lives --;
            }
            else {
                lives = 0;
                loss++;
                
               alert("You Lost the game!");
               playAgain();
            }
            
            var html =
                "<p>Wins: " + wins + "</p>"+
                "<p>Losses: " + loss + "</p>"+
                "<p>Chances left: " + lives +"</p>"+
                "<p>Used letters: " + usedLetters.join(" ") + " <p>";
            
        document.querySelector("#game").innerHTML = html;

        }


