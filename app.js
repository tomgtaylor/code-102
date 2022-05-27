function func1(){
    alert("Don't touch me!");
}
//------------------------------------------------------------------
function func2(){
    alert("Inertia keeps you from falling out of a rollercoaster.")
}
//------------------------------------------------------------------
function func3(){
    alert("The rarest naturally-occurring element in the Earth’s crust is astatine.")
}
//------------------------------------------------------------------
function favFood(){
   let food = prompt("What's your favorite food?");
   if (food == "pizza"){
      alert("You win free pizza for life!") 
    }
   else if (food == "burgers"){
    alert("Go buy the class some burgers!")
    }
    else if (food == "sushi"){
        alert("There's something fishy about that response..")
    }
    else {
        alert("You must not like pizza, burgers, and sushi.")
    }
} 
//------------------------------------------------------------------
function favScience(){
    let science = prompt("What is science? [hint: physics, chemistry, biology]");
    if (science == "physics"){
       alert("I pick things up and put them down.") 
    }
    else if (science == "chemistry"){
        alert("Warning: Chemicals!") 
    }
    else if (science == "biology"){
        alert("It's pretty boring to be honest. Just saying.")
    }
    else {
        alert("You didn't answer correctly. You fail science.") 
    }
} 
//------------------------------------------------------------------
function askName(){
    let firstName = prompt("what is your name? Type Tom or else.");
    console.log(firstName);
    document.write("Hello" + firstName + ", how are you today?");
}
//------------------------------------------------------------------
function submit(){
    if (document.getElementById('code1').value == "code"){
        document.write("you typed 'code.'");
    }
    else {
        document.write("You typed incorrectly.")
    }
} 
// Recursion below:------------------------------------------------------------------
// function askMath(){
//     let response = prompt("1 + 2");
//     if (response == 3 ){
//         alert("Good job.");
//     }
//     else {
//         alert("Wrong."); 
//         askMath();     
//     }
// }
function askMath(){
    let response = prompt("1 + 2");
    while (response != 3 ){
        alert("Try again.");
        response = prompt("1 + 2");
    }
    alert("Correct. You got it right.");
}
function ratePage(){
    let userNumber = prompt("How many thumbs would you rate my page? 1-5");
    for (let i = 1; i <= userNumber; i++){
        document.write("<img src='thumb.jpeg' />");
    }
}
// 
// 
// 
favFood(); 
favScience(); 
myMath(); 
askName();
//submit();
askMath();
ratePage();