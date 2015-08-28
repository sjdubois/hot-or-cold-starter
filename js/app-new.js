
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	var totalGuesses = [];
  	var valid = false;

	function guessCount() {
		$("#count").html('');
		var NumberOfGuesses = totalGuesses.length;
		$("#count").append(NumberOfGuesses);

	}
	

	while(!valid) {
		$("form").submit(function(e){
		e.preventDefault();
		guess = $("#userGuess").val();
		var  result = parsInt(guess);

		console.log(result);

		}


	if(isNaN(result)) {
		formvalid = false;

		valid = false; // loop back and prompt again - need number please
	} else {
		
		totalGuesses.push(result);
		
		$("#guessList").html('');

		var i;
		for (i = 0; i < totalGuesses.length; i++) {
			$("#guessList").append('<li>' + totalGuesses[i] + '</li>');
		}
		
		guessCount();

	}

	}







	/*$("form").submit(function(e){
		e.preventDefault();
		guess = $("#userGuess").val();


		totalGuesses.push(guess);
		
		$("#guessList").html('');

		var i;
		for (i = 0; i < totalGuesses.length; i++) {
			$("#guessList").append('<li>' + totalGuesses[i] + '</li>');
		}
		
		guessCount();

		
	});*/



});

$(function(){

	

	
		


	/*function guessCounter() {
		totalGuesses.push();
	}*/







// Random Math Function - Generates a Random Integer between 1-100

	/* function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	$('.new').click(function() {
		var randomNumber = getRandomInt(1, 100);
		alert(randomNumber);
	}); */








});


