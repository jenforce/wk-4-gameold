
//Game setup
//random generate and store vars: targetScore, crystalOneValue crystalTwoValue crystalThreeValue crystalFourValue


var win = 0;
var lose =0;	
var userScore = 0;
var oldScore = 0;
var crystalmin = 1;
var crystalmax =12;
var targetScore = randomNumber(60,19);
var crystalArray = [];
var newNumber;


var target = document.getElementById('targetScoreDisplay');
               target.innerHTML = targetScore;

 var uScore = document.getElementById("userScoreDisplay");
               target.innerHTML = userScore;              

	function randomNumber (min,max) { 
		return Math.floor(Math.random() * (max - min + 1))+min;
		}
		console.log(targetScore + "targetScore");

	
	
	for(var i = 0; i < 4; i++){
		var ranu = randomNumber(12,1); 
		crystalArray.push(ranu); 
		}
		console.log(crystalArray);				

$("#crystalclick1, #crystalclick2, #crystalclick3, #crystalclick4").on('click',function() {		
			
		if (userScore === targetScore){
				winIt();
			
			}else if ( userScore > targetScore){
				loseIt();
			

			}else if (event.target === crystalclick1){
						console.log(crystalArray[0]);
						newNumber = (crystalArray[0]);	
						userScore = newNumber + oldScore;
						oldScore = userScore;
						return userScore;
			}else if (event.target === crystalclick2){
						console.log(crystalArray[1]);
						newNumber = (crystalArray[1]);	
						userScore = newNumber + oldScore;
						oldScore = userScore;
						return userScore;
			}else if (event.target === crystalclick3){
						console.log(crystalArray[2]);
						newNumber = (crystalArray[2]);	
						userScore = newNumber + oldScore;
						oldScore = userScore;
						return userScore;
			}else if (event.target === crystalclick4){
						console.log(crystalArray[3]);
						newNumber = (crystalArray[3]);	
						userScore = newNumber + oldScore;
						oldScore = userScore;
						return userScore;
			}															
});	
				
function winIt(){
				win++;
                console.log('you won1 ');
                var winCounterElement = document.getElementById("wins");
                winCounterElement.innerHTML = win;
                //resetIt();
	}	
function loseIt(){
				lose++;
                var loseCounterElement = document.getElementById("losses"); 
               loseCounterElement.innerHTML = lose;
  				//resetIt();
	}	

/*function resetIt(){
	var userScore = 0;
	var oldScore = 0;
	var crystalArray = [];
	var newNumber;
	console.log(targetScore + "targetScore");
	var targetScore = randomNumber(60,19);
};*/


	
