
function toCelsius(fahrenheit){
    var calc=(5/9) * (fahrenheit-32);
    `return celcius is ${calc} and fahrenheit is ${fahrenheit}`;
}

 var freht=100;
 var celcius=toCelsius(freht);
//  carsole.log(celcius)

function isEven(num) {
    if(num%2==0){
        console.log("this is even number");
    }else{
        console.log("this is add number");
    }
}

var x=19;
var result=isEven(x);


// switch case statement 



var number=prompt("enter your number");
var grade=parseInt(number);

switch (true){

    case (grade>=80 && grade<=100):
    console.log("you got A+");
break;
case(grade>=70 && grade<=79):
console.log("you got A");
break
case (grade>=60 && grade<=69):
console.log("you got A-");
break;
case (grade>=50 && grade<=59):
console.log("you got A+");
break;
case (grade>=40 && grade<=49):
console.log("you got C");
break;
case(grade<40);
console.log("you are fail");

}
 
// function


function sum(3,8) {
   
    var total=a+b;
    var sub =b-a;
    return here sum is ${total} sub is ${sub};



}
var x=100;
var y=200;

var result=sum(x,y);

console.log(result);
// while loop

/*
// function checkvowel(alphabet){
//     if(alphabet=='a'||alphabet=='e'||alphabet=='i'||alphabet=='o'||alphabet=='u'){

//         return `$(alphabet),this alphabet is vowel`;
//     }else{
//         return `${alphabet},this alphabet is consonent`;
//     }
// }
var letter='u';

var result=checkvowel(letter.toLowerCase());

console.log(result)

// while loop



<script src="mehenaz.js"></script>
<button id="btn1 " class="mx-5 mt-4">click me</button>