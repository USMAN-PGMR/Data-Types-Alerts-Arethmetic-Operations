// for allert name
document.getElementById('alertName').onclick=function() {
    alert("Prince Usman")
    document.getElementById("statement").innerHTML = 'alert("Prince Usman")';
    document.getElementById("output").innerHTML= 'Prince Usman';
}
// orignal statement clear 1

document.getElementById("clearOne").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}
// orignal statement clear 2

document.getElementById("clearTwo").onclick = function () {
    document.getElementById("output").innerHTML = ""
}
// for alertNumber
document.getElementById("alertNumber").onclick=function() {
    alert("123456789")
    document.getElementById("statement").innerHTML= 'alert("123456789")';
    document.getElementById("output").innerHTML= '123456789';
}
// for show variableName
document.getElementById("variableNames").onclick=function() {
    let html=
    "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a<code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code> , and then ask JavaScript for the value assigned to <code>Rose</code> , you'll come up empty </li></ul>"
    document.getElementById("statement").innerText= html;
    document.getElementById("output").innerHTML= html;
}
//  for camal case
document.getElementById("camelCase").onclick=function(){
    let camelCase=`<ul>
    <li>userResponse</li>
    <li>userResponse</li>
    <li>userResponseTimeLimit</li>
    <li>response</li>
    </ul>`
    document.getElementById("statement").innerText= camelCase;
    document.getElementById("output").innerHTML= camelCase;
}
// for sum Number
let num1= 5;
    let num2= 10;
    let sum= num1+num2;
    console.log(sum)

document.getElementById("sumNumber").onclick=function(){
    let sumNumber='let num1= 5;<br>let num2= 10;<br>let sum= num1+num2;'
    document.getElementById("statement").innerHTML= sumNumber;
    document.getElementById("output").innerHTML= sum;
}
// for subtract Number
let sub1= 5;
    let sub2= 10;
    let subtract= sub1-sub2;
    console.log(subtract)
document.getElementById("subNumber").onclick=function(){
    let subNumber="let sub1= 5;<br>let sub2= 10;<br>let subtract= sub1-sub2;"
    document.getElementById("statement").innerHTML= subNumber;
    document.getElementById("output").innerHTML= subtract;
}
// for multiply number
let mul1= 5;
    let mul2= 10;
    let multiply= mul1*mul2;
    console.log(multiply)
document.getElementById("mulNumber").onclick=function(){
    let multiNumber="let mul1= 5;<br>let mul2= 10;<br>let multiply= mul1*mul2;"
    document.getElementById("statement").innerHTML=multiNumber;
    document.getElementById("output").innerHTML=multiply;
}
// for dividing numbers
let div1= 5;
    let div2= 10;
    let dividing= div1/div2;
    console.log(dividing)
document.getElementById("divNumber").onclick=function(){
    let divNumber="let div1= 5;<br>let div2= 10;<br>let dividing= div1/div2;"
    document.getElementById("statement").innerHTML=divNumber;
    document.getElementById("output").innerHTML=dividing;
}
// calculate some numbers 
let som1 = 36
let som2 = 6
let som3 = 3
let som4 = 2
let som5 = 4
let som6 = 3
let som7 = 5
let calculate = som1 / som2 * som3 ** som4 - som5 * som6 + som7;
console.log(calculate)
document.getElementById("calculateNumber").onclick=function(){
    let calculateNumber=
    "let som1 = 36<br>let som2 = 6<br>let som3 = 3<br>let som4 = 2<br>let som5 = 4<br>let som6 = 3<br>let som7 = 5<br>let calculate = som1 / som2 * som3 ** som4 - som5 * som6 + som7;"
    document.getElementById("statement").innerHTML=calculateNumber;
    document.getElementById("output").innerHTML=calculate;
}
// clear all 

document.getElementById("clearAll").onclick = function() {
    document.getElementById("output").innerHTML = ""
    document.getElementById("statement").innerHTML = ""
}
// for year (from google or net,according to current year)
var now = new Date();
var year = now.getFullYear(year)
document.getElementById("year").innerText = year