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

function displayRanNum () {
	$("#randomNum").html(randomNum);
}

function displayTotalScore () {
	$("#totalScore").html(totalScore);
}

displayRanNum();
crystalValues();
displayTotalScore();

$("#red").on("click", function() {
	totalScore = redCrystal + totalScore;
	displayTotalScore();
	winLose();
});

$("#blue").on("click", function() {
	totalScore = blueCrystal + totalScore;
	displayTotalScore();
	winLose();
});

$("#yellow").on("click", function() {
	totalScore = yellowCrystal + totalScore;
	displayTotalScore();
	winLose();
});

$("#green").on("click", function() {
	totalScore = greenCrystal + totalScore;
	displayTotalScore();
	winLose();
});

function winLose() {
	if (totalScore === randomNum) {
		alert("You Won!");
		wins++;
		$("#wins").html("Wins: " + wins);
		reset();
	}
	else if (totalScore > randomNum) {
		alert("You Lost!");
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
}

});