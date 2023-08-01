// document.querySelector("button").addEventListener("click", handleClick);

//to add an event listener we need the target who is gonna listen to the event
//target.addEventlistener is the syntax to add an event listener to the target
//addEventListener function takes two arguments 
//1. what event should the target listen eg. "click", it must be added as a string
//2. a function that is going to be called when the event is made, without () brackets.
//this will execute our code whenever button gets clicked .. if a parenthesis is added then the function is called even without the event is made 

// function handleClick(){
//     alert("i got clicked!");
// }

// document.querySelector("button").addEventListener("click", function(){
//     alert("i got clicked!");
// });

//this method of creating an anonymous funtion is therefore widely adapted















//detecting button press



//to add this to not only the first button we will instead create a for loop
//we can even use a while loop
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //this.style.color = "white";
        //the "this" method returns the identity of the elemrnt that is triggered, if we click the 1st button then it appears on the console
        //this.innerHTML will return the innerHtml od the button that is triggered

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);

    
    //     switch (buttonInnerHTML) {
    //         case 'w':
    //             //this audio thing is as same as a variable declared using constructor function having a property of "location of file" and a method "play" associated to it
    //             //function Audio (fileLocation) {
    //             //     this.fileLocation = fileLocation;
    //             //     this.play = function() {
    //                 //Tap into the audio hardware
    //                 //Check the file at fileLocation exists
    //                 //Check the file at fileLocation is a sound file
    //                 //Play the file at fileLocation
    //             // }
    //             var crash = new Audio("sounds/crash.mp3");
    //             crash.play();
    //             break;
    //         case 'a':
    //             var kickBass = new Audio("sounds/kick-bass.mp3");
    //             kickBass.play();
    //             break;
    //         case 's':
    //             var snare = new Audio("sounds/snare.mp3");
    //             snare.play();
    //             break;
    //         case 'd':
    //             var tom1 = new Audio("sounds/tom-1.mp3");
    //             tom1.play();
    //             break;
    //         case 'j':
    //             var tom2 = new Audio("sounds/tom-2.mp3");
    //             tom2.play();
    //             break;
    //         case 'k':
    //             var tom3 = new Audio("sounds/tom-3.mp3");
    //             tom3.play();
    //             break;
    //         case 'l':
    //             var tom4 = new Audio("sounds/tom-4.mp3");
    //             tom4.play();
    //             break;
    //         default:
    //             //it is like the else statement that covers all other cases than what are mentioned
    //             console.log('Invalid key pressed');               
    //     }
    });

}







//detecting keyboardpress


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    //the event argument triggers which event triggered the function of our eventListener
    //but it can be written in any ways like evt, et, and will still perform the same task of returning the event
    //basically addEventListener ke callback function me agar koi argument rhta hai toh uska kaam sirf event return krnr ka hi hoga

});


function makeSound(key){
    switch(key){
            case 'w':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case 'a':
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            case 's':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case 'd':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case 'j':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case 'k':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case 'l':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            default:
                //it is like the else statement that covers all other cases than what are mentioned
                alert('Invalid key pressed');               
        }
}


//adding animation to our keys
// as we want it happen with both button click and keyboard press, we will create a new function
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    //now whenever we press a function it remains pressed, so in order to remove it after a certain time we will need to add a timeout function
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    //the setTimeOut function takes a funtion, a time and other values as arguments
    
}





























//****************Higher order function and Passing function as argument*******************88

//the function that takes up another function as input is called a higher order function
// function add(numl, num2) {
//     return num1 + num2;
// }
// function muttipty(num1, num2) {
//     return num1 * num2;
// }
// function calculator(num1, num2, operator) {
//     //here we can pass the operator as an argument
//     //the same operator is sent inside the function in the return statement
//     return operator(num1, num2);
// }
// this is how we can specify which function is to be called eg. calculator(4,5,multiply) and get 20 as our output



//*************************CALLBACK FUNCTION ****************** */
//the function that is passsed as an argument to a Higher order function is known as a higher order function
//an event calls the callback function to be executed







//audio, addEventListener etc are all constructor function whose src code is not accesible or  visible to us









//***************more about js function ****************

// var houseKeeper1 = {
//     yearsOfExperience : 12,
//     name : "jane",
//     skills: ["bathroom","lobby","bedroom"]
// }
// var houseKeeper2 = {
//     yearsOfExperience : 12,
//     name : "jane",
//     skills: ["bathroom","lobby","bedroom"]
// }
// var houseKeeper3 = {
//     yearsOfExperience : 12,
//     name : "jane",
//     skills: ["bathroom","lobby","bedroom"]
// }

//instead of creating so many object having the same attributes
//we can rather keep generating new object whenever needed using a CONSTRUCTOR FUNCTION

// function HouseKeeper (name ,yearsOfExperince, skills){
//     this.name=name ;
//     this.yearsOfExperience=yearsOfExperince ;
//     this.skills=skills;
// }

//the first letter of the name of a constructor function needs to be capitalised convextionally
//this is how we can differentiate a constructor function from any other function
//now to initialise any new object we will just need to provide with the values
// for example,
// var houseKeeper4 = new HouseKeeper("Jane", 12, ["bedroom", "lobby"]);
// console.log(houseKeeper1.name);
//output - Jane
//the new keyword is really important
//hence this method is far smaller than declaring variable individually and assigning them all these properties again

//*************objects and their methods************* */

//suppose moveSuitcase is a method that perfoms some task
// function moveSuitcase() {
//     alert("May I take your suitcase?");
//     pickUpSuitcase();
//     move ();
// }
//if we want our object to also have an associated funcion we can simply provide the nem of the functon as a new parameter and then put in any anonymous function  
// var houseKeeper5 = {
//     yearsOfExperience : 12,
//     name : "jane",
//     skills: ["bathroom","lobby","bedroom"],
//     moveSuitcase : function(){
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//     }
// }
//now if we want our object to perform the task we can simply call its own property as shown below-
// houseKeeper5.moveSuitcase();
//we always use a dot notation to call a method
//the only difference between a method and a property is its parenthesis


//to associate this property along with our constructor function
// function HouseKeeper (name ,yearsOfExperince, skills){
//     this.name=name ;
//     this.yearsOfExperience=yearsOfExperince ;
//     this.skills=skills;
    //associating it here using prototype
//     this.moveSuitcase= function(){
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//     }
// }
//so now if we declare or create any variable with this constructor func, they will have this method
//and can be called as 
// var houseKeeper6 = new HouseKeeper ("John" ,8,[ 'kitchen', 'dining room']);
// the method can be called by houseKeeper.moveSuitcase();
