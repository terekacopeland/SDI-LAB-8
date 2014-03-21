//alert("JavaScript works!");

//SDI 1403
//Lab 8
//Tereka Copeland
//WORKING WITH STRINGS

//problem 1
var validate = "tcopeland@fullsail.com";
var atSymbol = ("@");
//var space = (" ");
var period = (".")

var checkEmail = function() {
	if (atSymbol > -1) {
		
		//return true;
		
		console.log("only 1 @ symbol"); 
		
		 if  (period > -1)
			
			//return true;
			
			console.log("only 1 period")
			
			} else {
				
				return false;
				
				console.log("Invalid email!");
			};
};

checkEmail();

/*//problem 2

 var namesStartJ = function() {

 var namesStartJ = ["Jimmy", "/", "John", "/", "Joseph", "/", "Jack"];

 for (var i = 0; i < namesStartJ.length; i++) {

 console.log("For guys have names that Start with 'J' " + namesStartJ + ".");

 };

 namesStartJ.pop("/");
 console.log("I am removing the / seperator " + namesStartJ.pop);

 };

 namesStartJ();*/
