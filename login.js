name1="";
name2="";
function login(){
    name1= document.getElementById("input1").value;
    name2= document.getElementById("input2").value;
    if(name1==null||name2==null){
        window.alert("Please Enter A Username Into The Input...Thank You!");
    }
    else{
       
    point= document.getElementById("pointinput").value;
    console.log(name1);
    console.log(name2);

    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);
    localStorage.setItem("point", point);

    window.location="game.html";

    
    

    }
    

    
}

