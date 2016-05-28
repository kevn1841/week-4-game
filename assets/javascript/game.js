//Setting up all the necessary variables.

//a random number for the number you need to reach to win, from 19 to 120 inclusive.
var yourNum = 0;

var goalNum = Math.floor(Math.random() * 101) + 19;

document.getElementById("numberToMatch").innerHTML = goalNum;

var wins = 0;

var losses = 0;


// Here, we give each crystal its own value, then console log to make sure that the numbers are between 1 and 12 inclusive.


var ruby = Math.floor(Math.random() * 12) + 1;

var aqua = Math.floor(Math.random() * 12) + 1;

var emerald = Math.floor(Math.random() * 12) + 1;

var diamond = Math.floor(Math.random() * 12) + 1;

console.log("ruby :" + ruby)

console.log("aquamarine :" + aqua)

console.log("emerald :" + emerald)

console.log("diamond :" + diamond)

//this section will allow for the buttons to be clicked, then console logged.
	function clicking(){

		$("#ruby").click(function() {
		yourNum += ruby;
		document.getElementById("updatingScore").innerHTML = yourNum;
		console.log(yourNum);
		checkScore();
		} );

		$("#aqua").click(function() {
		yourNum += aqua;
		document.getElementById("updatingScore").innerHTML = yourNum;
		console.log(yourNum);
		checkScore();
		} );

		$("#emerald").click(function() {
		yourNum += emerald;
		document.getElementById("updatingScore").innerHTML = yourNum;
		console.log(yourNum);
		checkScore();	
		} );

		$("#diamond").click(function() {
		yourNum += diamond;
		document.getElementById("updatingScore").innerHTML = yourNum;
		console.log(yourNum);
		checkScore();

		} );
		function checkScore(){
		if (yourNum== goalNum){
			alert("good job.");
			wins++;
			document.getElementById("wins").innerHTML = "Wins : " + wins;
			reset();
		}

		if (yourNum> goalNum){
			alert("try again.");
			losses++
			document.getElementById("losses").innerHTML = "Losses : " + losses;
			reset();
		}
	};

		function reset(){

			ruby = Math.floor(Math.random() * 12) + 1;

			aqua = Math.floor(Math.random() * 12) + 1;

			emerald = Math.floor(Math.random() * 12) + 1;

			diamond = Math.floor(Math.random() * 12) + 1;
			
			yourNum = 0;

			document.getElementById("updatingScore").innerHTML = yourNum;

			goalNum = Math.floor(Math.random() * 101) + 19;

			document.getElementById("numberToMatch").innerHTML = goalNum;

			document.getElementById("updatingScore").innerHTML = yourNum;

			console.log("NewValue of ruby :" + ruby);

			console.log("NewValue of aquamarine :" + aqua);

			console.log("NewValue of emerald :" + emerald);

			console.log("NewValue of diamond :" + diamond);

			console.log(yourNum);
		}

		
};



//fantastic. Now we move on to the cause and effects of winning or losing.


console.log(yourNum);
console.log(goalNum);

clicking();