console.log("It's working");
function write(name){
    var username = document.getElementById('name').value;
console.log(username);

var line1 = document.getElementById('creepy').value;
console.log(line1);
var line2 = document.getElementById('house').value;
console.log(line2);
var line3;
if(document.querySelector('input[name="movement"]:checked') != null){
    line3= document.querySelector('input[name="movement"]:checked').value;

 }else{
name="";
 }
console.log(line3);

var line3Message; 

if(line3=="run"){
    line3Message = "raced";
}else if(line3=="sprint"){
    line3Message = "sprinted";
}else if(line3=="ran"){
    line3Message = "ran";
}else if(line3=="rushed"){
    line3Message = "rushed";
}

var line4 = document.getElementById('door').value;
console.log(line4);
var line5 = document.getElementById('bedroom').value;
console.log(line5);
var line6 = document.getElementById('joking').value;
console.log(line6);
var line7 = document.getElementById('voice').value;
console.log(line7);
var line8 = document.getElementById('find out').value;
console.log(line8);
var line9;
if(document.querySelector('input[name="missing"]:checked') != null){
    line9= document.querySelector('input[name="missing"]:checked').value;

 }else{
    name="";
 }
console.log(line9);

var line9Message; 

if(line9=="painting"){
    line9Message = "painting ";
}else if(line9=="chair"){
    line9Message = "chair";
}else if(line9=="fridge"){
    line9Message = "fridge";
}else if(line9=="can"){
    line9Message = "can";
}


var line10 = document.getElementById('freaking out').value;
console.log(line10);
var line11 = document.getElementById('breathing').value;
console.log(line11);
var line12 = document.getElementById('screamed').value;
console.log(line12);
var line13 = document.getElementById('hand').value;
console.log(line13);


document.getElementById('output').innerHTML +="<h2> Hello "+username+"</h2>";
document.getElementById('output').innerHTML += "One evening "+username+" and their friends were walking in the woods. They heard an eerie noise and followed the sound until they came across something "+line1+". It was a "+line2+". They didn’t need shelter until it started to down pour, so they ran up to the "+line2+". They knocked frantically on the "+line4+", but no one answered. Suddenly the "+line4+" creeked opened. "+username+" and their friends "+line3Message+" straight inside. "+username+" and their friends looked around the "+line2+" trying to find who opened the "+line4+". They were stumped because no one was there. During their search, they found a man missing his "+line13+" in a "+line9Message+". It creeped them out but they decided to spend the night in the "+line2+" until the rain stopped. "+username+" and their friends found some room in the "+line5+" and decided to get some sleep. In the middle of the night, "+username+" heard footsteps. At first, they thought it was one of their friends "+line6+" around. Then a voice said 'where’s my "+line13+"?'. It wasn’t any of "+username+"'s friend's voices, so "+username+" decided to "+line7+". "+username+" woke everyone up and asked them to come and help them "+line8+" what it was. They walked around the "+line2+" until they noticed the guy in the "+line9Message+" was missing his "+line13+". All of them were "+line10+" especially when they heard heavy "+line11+" behind them. "+username+" and his friends all turned their heads and saw a man growling. To their shocked it was the man in the "+line9Message+"! He yelled 'where’s my "+line13+"?' "+username+" and their friends all then "+line12+" and ran. They ran through the whole "+line2+" but no matter where they turned, he was always there. When "+username+" and their friends reached the "+line4+", they tried to open it, but it wouldn’t open. With each second passing the man got closer and closer. Once he got close enough, he asked them again “where’s my "+line13+" ”. "+username+" shakingly told him 'we don’t know' then the man from the "+line9Message+" said “I will take yours then” the last thing they heard was silence. "+username+" and their friends were never seen again.";
}