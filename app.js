
// QUESTION NUMBER 1 Starts here,
document.write("<h1><u>Question # 1</u></h1>");
for(var i = 1; i <= 5; i++){
    document.write("Hello", "<br>")
};




// QUESTION NUMBER 2 Starts here,
document.write("<h1><u>Question # 2</u></h1>");

for(var i = 1; i <= 10; i++){
    document.write(i, "<br>")
};




// QUESTION NUMBER 3 Starts here,
document.write("<h1><u>Question # 3</u></h1>");

var input = prompt("Enter a Number To Print its Multiplication table")

var input1 = prompt("Enter Length Of Multiplication table")

document.write("Multiplication Table Of: " + input, "<br>"  )

document.write("Lenght of table: " + input1, "<br>")

for(var i = 1; i <= input1; i++){
    document.write( input + " x " + i + " = " + i*input, "<br>" )
}





// QUESTION NUMBER 4 Starts here,
document.write("<h1><u>Question # 4</u></h1>");

var mobile = ["Nokia" , "Sumsung" , "Apple" , "Sony" , "Huawei"];
for (var i = 0; i < mobile.length; i++){
    document.write( mobile[i], "<br>")
};




// QUESTION NUMBER 5 Starts here,
document.write("<h1><u>Question # 5</u></h1>");

var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawbery"]

for (var i = 0; i < fruits.length; i++){
    document.write(fruits[i], "<br>")
    
};
for (var i = 0; i < fruits.length; i++){
document.write("Element at index " + i + " is: " + fruits[i] , "<br>")
};







// QUESTION NUMBER 6 Starts here,
document.write("<h1><u>Question # 6</u></h1>");

var input2 = prompt("Enter Number Of Items")
document.write("Number of item: " + input2, "<br>", "Items: ",  "<br>")

var array = []

for (var i = 0; i < input2; i++){
    var input3 = prompt("Enter Value For Index " + i)
    array.push(input3)
    document.write(array[i], "<br>")
}




// QUESTION NUMBER 7 Starts here,
document.write("<h1><u>Question # 7</u></h1>");


document.write("<h3> Counting: </h3>");
var number1 = []
for (var i = 1; i <= 15; i++){
    number1.push(i)
}

document.write(number1)
var number2 = []
for(var i = 15; i >= 1; i--){
     number2.push(i)
 }
document.write("<h3> Reverse Counting: </h3>");
document.write(number2)

var number3 = []
for (var i = 0; i <= 25; i++){
    if(i%2 == 0){
        number3.push(i)
    }
}
document.write("<h3> Even Counting: </h3>");
document.write(number3)

var number4 = []
for (var i = 1; i <= 25; i++){
    if(i%2 != 0){
        number4.push(i)
    }
}
document.write("<h3> Odd Counting: </h3>");
document.write(number4)

var number5 = []

 for (var i = 1; i <= 20; i++){
     if(i%2 == 0){
         number5.push(i+"k")
     }
 }

document.write("<h3> Serise: </h3>");

document.write(number5, "<br>")









// QUESTION NUMBER 8 Starts here,
document.write("<h1><u>Question # 08</u></h1>");
var array = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
var order = prompt("Welcome to Shaheen Bakery. What do you want to order sir/ ma'am");
var flag = false;
 for(var i = 0; i < array.length; i++){
if(array[i] === order.toLowerCase()){
document.write(order + " is available at index " + i)
flag = true;
  }
}
if(flag === false){
document.write(order + " is not available")
}








// QUESTION NUMBER 9 Starts here,
document.write("<h1><u>Question # 09</u></h1>");
let array1 = [24, 53, 78, 91, 12]
let max= array1[0]
for(let i = 0; i<array1.length; i++){
    if(array1[i]>max){
    max= array1[i]
    }
}  
document.write('<h3>Array items: ' + array1 + '</h3>')
document.write('The <b>Biggest</b> value in array is: ' + max, "<br>")







// QUESTION NUMBER 10 Starts here,
document.write("<h1><u>Question # 10</u></h1>");
let array2= [24, 53, 78, 91, 12]
let min=array2[0]
for(let i = 0; i < array2.length; i++){
    if(min>array2[i]){
    min= array2[i]
    }
}
document.write('<h3>Array items: ' + array2 + '</h3>')
document.write('The <b>Smallest</b> value in array is: ' + min, "<br>")






// QUESTION NUMBER 11 Starts here,
document.write("<h1><u>Question # 11</u></h1>");
let array3 = [24, 53, 78, 91, 12]
let max1= array3[0]
for(let i = 0; i < array3.length; i++){
    if(array3[i]>max1){
    max1= array3[i]
    }
}
let array4= [24, 53, 78, 91, 12]
let min1=array4[0]
for(let i = 0; i < array4.length; i++){
    if(min1>array4[i]){
    min1= array4[i]
    }
}
document.write('<h3>Array items: ' + array3 + '</h3>')
document.write('The <b>Biggest</b> value in array is: ' + max1, "<br>")
document.write('The <b>Smallest</b> value in array is: ' + min1, "<br>")







// QUESTION NUMBER 12 Starts here,
document.write("<h1><u>Question # 12</u></h1>");
 var multiples = []

 for (var i = 5; i <= 100; i++){
    if(i%5==0){
        multiples.push(i)
    }
}
document.write("<h2>" + "Multiples of 5" + "</h2>")
document.write('<h3>' + multiples + '</h3>', "<br>")







// QUESTION NUMBER 13 Starts here,
document.write("<h1><u>Question # 13</u></h1>");
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
document.write('<h3><table border="2px"><tr><td>Students</td><td>Scores</td><tr>')
for (var i = 0; i < students.length; i++){
        document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>")
}
document.write("</table></h3>")








// QUESTION NUMBER 14 Starts here,
document.write("<h1><u>Question # 14</u></h1>");
var list = [12, 45, 3, 22, 34, 50];
var input4 = +prompt("Enter End number ")
for (i = 0; i < list.length; i++)
{
    if(input4 === i)
    break;
   document.write(list[i], "<br>") 
}






// QUESTION NUMBER 15 Starts here,
document.write("<h1><u>Question # 15</u></h1>");
var mixarray = [ [1,2,3] , [4,5,6] , [7,8,9] ]

for(var i = 0; i < mixarray.length; i++){

        document.write(mixarray[i], "<br>")
    
}





// QUESTION NUMBER 16 Starts here,
document.write("<h1><u>Question # 16</u></h1>");
var number7 = +prompt("Enter a Number")
var number8 = []
for(i = number7; i >= 0; i-=0.5){
    number8.push(i)
}
document.write(number8, "<br>")






// QUESTION NUMBER 17 Starts here,
document.write("<h1><u>Question # 17</u></h1>");
for(i = 0; i <= 20; i++){
        if(i%2!=0){
                document.write( i + " is odd", "<br>")
            }
        else if(i%2==0){
                document.write( i + " is even ", "<br>")
            }
}







// QUESTION NUMBER 18 Starts here,
document.write("<h1><u>Question # 18</u></h1>");
document.write("<h3>The Product Of The Odd Integers From 1 to 7  is: "  + 1*3*5*7 + " </h3><br>")
var rows = 5
var rows1 = 7
var col = 5





// QUESTION NUMBER 19 Starts here,
document.write("<h1><u>Question # 19</u></h1>");
for(var i = 1; i <= rows1; i++){
    for(var j = 7; j >= i; j--){
        document.write("*")
    }
    document.write("<br>")
    
}




// QUESTION NUMBER 20 Starts here,
document.write("<h1><u>Question # 20</u></h1>");
for(var i = 1; i <= rows1; i++){
    for(var j = 7; j >= i; j--){
        document.write("*")
    }
    document.write("<br>")
    
}
document.write("<br>")

for(var i = 1; i <= rows; i++){
    for(var j = 1; j <= col; j++){
        document.write("*")
    }
    document.write("<br>")
   
}
document.write("<br>")

for(var i = 1; i <= rows; i++){
    for(var j = 1; j <= i; j++){
        document.write("*")
    }
    document.write("<br>")
    
}
document.write("<br>")

for(var i = 1; i <= rows; i++){
    for(var j = 5; j >= i; j--){
        document.write("*")
    }
    document.write("<br>")
    
}