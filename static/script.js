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

L1.forEach(findTheBanana)
L2.forEach(findTheBanana)

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

greetingFunc()

if (window.location.pathname == "../WebDevLabs/index.html"){
    greetingFunc()
}
