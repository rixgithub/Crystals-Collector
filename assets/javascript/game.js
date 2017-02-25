$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var randomNum = Math.floor(Math.random() * 102) + 19;
	var totalScore = 0;
	var	redCrystal = [];
	var	blueCrystal = [];
	var	yellowCrystal = [];
	var	greenCrystal = [];

	var crystalValues = function() {
		redCrystal = Math.floor(Math.random() * 12) + 1;
		blueCrystal = Math.floor(Math.random() * 12) + 1;
		yellowCrystal = Math.floor(Math.random() * 12) + 1;
		greenCrystal = Math.floor(Math.random() * 12) + 1;
	}

	document.getElementById("audio").volume = 0.009;
	document.getElementById("audio").loop = true;
	displayRanNum();
	crystalValues();
	displayTotalScore();

	function displayRanNum () {
		$("#randomNum").html(randomNum);
	}

	function displayTotalScore () {
		$("#score").html(totalScore);
	}

	$("#red").on("click", function() {
		totalScore = redCrystal + totalScore;
		displayTotalScore();
		winLose();
		clearNewDiv();
	});

	$("#blue").on("click", function() {
		totalScore = blueCrystal + totalScore;
		displayTotalScore();
		winLose();
		clearNewDiv();
	});

	$("#yellow").on("click", function() {
		totalScore = yellowCrystal + totalScore;
		displayTotalScore();
		winLose();
		clearNewDiv();
	});

	$("#green").on("click", function() {
		totalScore = greenCrystal + totalScore;
		displayTotalScore();
		winLose();
		clearNewDiv();
	});

	function winLose() {
		if (totalScore === randomNum) {	
			$("#winLoss").append('<p id="won"></p>');
			$("#won").html("You Won!");
			wins++;
			$("#wins").html("Wins: " + wins);
			reset();	
		}
		else if (totalScore > randomNum) {
			$("#winLoss").append("<p id='lost'></p>");
			$("#lost").html("You Lost!");
			losses++;
			$("#losses").html("Losses: " + losses);
			reset();
		}
	}

	function reset () {
	    randomNum = Math.floor(Math.random() * 102) + 19;
		displayRanNum();
		crystalValues();
		totalScore = 0;
		displayTotalScore();
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	}

	function clearNewDiv() {
		if (totalScore >= 18) {
			$("#won").remove();
			$("#lost").remove();
		}
	}

});