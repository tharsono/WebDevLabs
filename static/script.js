let x, y, z
x = 5
y = 7
z = x + y

let A, B, C
A = "Hello "
B = "world!"
C = A + B

console.log(z);
console.log(C);

function SumNPrint(x1, x2){
    console.log(x1+x2)
}

SumNPrint(x, y)
SumNPrint(A, B)

if (C.length > z){
    console.log(C)
} else if(C.length = z){
    console.log("Good job!") 
}else{
    console.log(z) 
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
const L2 = ["Apple", "Banana", "Kiwi", "Orange"]

function findTheBanana(fruit){
    if (fruit == "Banana"){
        alert("Found the banana")
    }
}

//L1.forEach(findTheBanana)
//L2.forEach(findTheBanana)

function greetingFunc(){
    let E = document.getElementById("time")
    const d = new Date();
    let h = d.getHours();
    if (h < 5){
        E.innerHTML = "Good night, my name is Trish"
    } else if (h < 12){
        E.innerHTML = "Good morning, my name is Trish"
    }else if (h < 18){
        E.innerHTML = "Good afternoon, my name is Trish"
    }else if (h < 20){
        E.innerHTML = "Good evening, my name is Trish"
    }else{
        E.innerHTML = "Good night, my name is Trish"
    }
}

function addYear(){
    let E = document.getElementById("copyYear")
    const d = new Date();
    let year = d.getFullYear();
    E.innerHTML += " "+ year
}

// function showList(){
//     var l = document.getElementById("list")
//     if (l.style.display == "block"){
//         l.style.display = "none"
//     }else{
//         l.style.display = "block"
//     }
// }

$(document).ready(function(){
    $(".hideBio").click(function(){
      $("#bio").hide();
    });
    $(".showBio").click(function(){
      $("#bio").show();
    });
  });

function validateForm(){
    let fname = document.getElementById("fname")
    let email = document.getElementById("email")
    let comment = document.getElementById("comment")

    let isValid = true;
    let errorMsg = document.getElementById("error")
    
    if (!fname.checkValidity()) {
        isValid = false;
    }
    if (!email.checkValidity()) {
        isValid = false;
    }

    if (!comment.checkValidity()) {
        isValid = false;
    }
    if (!isValid) {
        errorMsg.style.display = "block"
    } else {
        errorMsg.style.display = "none"
    }
}

if (window.location.pathname == "/index.html"){
    greetingFunc()
}

function getAdvice() {
    // Send a request to the Advice Slip API to get random advice
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json()) // Convert the API response to a JavaScript object
    .then(data => {
    // Extract the "advice" text from the JSON response and display it on the webpage
    document.getElementById("adviceText").innerText = data.slip.advice;
    })
    .catch(error => {
    // If something goes wrong (like no internet), log the error in the console
    console.error("Error fetching advice:", error);
    // Display a user-friendly error message on the webpage
    document.getElementById("adviceText").innerText = "Oops! Something went wrong. Try again.";
    });
    }
    