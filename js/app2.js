
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});





	/*--- Global variables ---*/
	var totalGuesses = [];
	var randomNumber = getRandomInt(1, 100);



	/*--- Visually shows number of guesses ---*/
	function guessCount() {
		$("#count").html('');
		var NumberOfGuesses = totalGuesses.length;
		$("#count").append(NumberOfGuesses);
	}
	


	/*--- 
	On form submission take input and push into the array "totalGuesses".
	list array items visually on page #guessList".
	run guessCount function
	run guesstimate function  ---*/

	$("form").submit(function(e){
		e.preventDefault();
		guess = $("#userGuess").val();

		totalGuesses.push(guess);
		
		$("#guessList").html('');

		var i;
		for (i = 0; i < totalGuesses.length; i++) {
			$("#guessList").append('<li>' + totalGuesses[i] + '</li>');
		}
		
		guessCount();
		guesstimate(guess,randomNumber);

	});

// testing to see if git updates this file 


	function gameInitialize() {
		$("#count").html('0');
		$("#guessList").html('');
		$(".success").css("display", "none");
		randomNumber = getRandomInt(1, 100);
		
		while(totalGuesses.length > 0) {
		    totalGuesses.pop();
		}

		alert(randomNumber);
	}
	


	// Random Math Function - Generates a Random Integer between 1-100
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('.new').click(function() {
		
		gameInitialize();

	}); 



	/*--- takes "guess" and "randomNumber" and compares them, then returns: Success, Hot, Warm , or Cold ---*/
	function guesstimate() {
	if (guess == randomNumber) {
			$(".success").css("display", "block");
		} else if (guess >= randomNumber -5 && guess <= randomNumber +5) {
			alert("Your'e HOT! Guess Again");
		} else if (guess >= randomNumber -10 && guess <= randomNumber +10) {
			alert("Your'e warm! Guess Again");
		} else {
			alert("Your'e COLD! Guess Again");
		} 

	}

	// !!!!!! What if randomNumber is below 10 or above 90? 


});






