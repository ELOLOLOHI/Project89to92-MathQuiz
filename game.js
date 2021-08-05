name1= localStorage.getItem("name1");
name2= localStorage.getItem("name2");
point= localStorage.getItem("point");
console.log(name1);
console.log(name2);
score1=0;
score2=0;
document.getElementById("name1").innerHTML=name1+": ";
document.getElementById("name2").innerHTML=name2+": ";

document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;

document.getElementById("qturn").innerHTML= "Question Turn: "+ name1;
document.getElementById("aturn").innerHTML= "Answer Turn: "+ name2; 

function send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    operation= document.getElementById("operation").value;

    if(operation=="*"){
        actual_answer= parseInt(number1)*parseInt(number2);
    }

    if(operation=="/"){
        actual_answer= Math.floor(parseInt(number1)/parseInt(number2));
    }

    if(operation=="+"){
        actual_answer= parseInt(number1)+parseInt(number2);
    }

    if(operation=="-"){
        actual_answer= parseInt(number1)-parseInt(number2);
    }

    question= "<h4>"+number1+operation+number2+"</h4>";
    inputbox= "<br>Answer: <input id='checkbox' placeholder='Enter Answer'>";
    checkbutton="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    row= question+inputbox+checkbutton;
    document.getElementById("qoutput").innerHTML= row;

    console.log(actual_answer);

    document.getElementById("number1").innerHTML="";
    document.getElementById("number2").innerHTML="";
    document.getElementById("operation").innerHTML="";



    
}

questionturn= "player1";
answerturn="player2";

function check(){
    answer= Math.floor(document.getElementById("checkbox").value);
    if(answer==actual_answer){
        window.alert("You Have The Right Answer! :)")
        if(answerturn=="player2"){
            score2= score2+1;
            document.getElementById("score2").innerHTML=score2;
        }
        else{
            score1=score1+1;
            document.getElementById("score1").innerHTML=score1;
        }
    }
    else {
        window.alert("You Have The Wrong Answer :(")
        if(answerturn=="player2"){
            score2= score2-1;
            document.getElementById("score2").innerHTML=score2;
        }
        else{
            score1=score1-1;
            document.getElementById("score1").innerHTML=score1;
        }

    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("qturn").innerHTML="Question Turn: "+name2;

    }
    else{
        questionturn="player1";
        document.getElementById("qturn").innerHTML="Question Turn: "+name1;


    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("aturn").innerHTML="Answer Turn: "+name2;

    }
    else{
        answerturn="player1";
        document.getElementById("aturn").innerHTML="Answer Turn: "+name1;


    }

    document.getElementById("qoutput").innerHTML=" ";
    document.getElementById("number1").innerHTML=" ";
    document.getElementById("number2").innerHTML=" ";
    document.getElementById("operation").innerHTML=" ";

    if(score1==point){
        winner=name1;
        localStorage.setItem("winner", winner);
        window.location="winner.html";
        }
    else if(score2==point){
        winner=name2;
        localStorage.setItem("winner", winner);
        window.location="winner.html";
    }
}

