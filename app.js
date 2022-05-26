function func1(){
    alert("Don't touch me!");
}
function func2(){
    alert("Inertia keeps you from falling out of a rollercoaster.")
}
function func3(){
    alert("The rarest naturally-occurring element in the Earth’s crust is astatine.")
}
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
favFood(); favScience(); myMath();