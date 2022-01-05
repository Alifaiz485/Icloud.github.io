
function ResultSubmit(){
var c= document.getElementsByClassName("SubmitBtn");


    var a= "19SCSE1010713";
   var e="19scse1010713";
   var f="19scse1120008";
   var g="19SCSE1120008";
    var b= document.getElementById("ResultInput").value;
    var d= document.getElementsByClassName("ResultOutput")
 if(a==b){

    document.getElementById("ResultOutput").style.display = "block";
    document.getElementById("ResultOutput2").style.display = "none";       
 }
 else if(b==e){
    document.getElementById("ResultOutput").style.display = "block"; 
    document.getElementById("ResultOutput2").style.display = "none";
 }
 else if(b==f){
    document.getElementById("ResultOutput2").style.display = "block"; 
    document.getElementById("ResultOutput").style.display = "none";
 }
 else if(b==g){
    document.getElementById("ResultOutput2").style.display = "block"; 
    document.getElementById("ResultOutput").style.display = "none";
 }
 
 else{
     alert("invalid Roll Number");
 }
}


function SideBarFunction(){
    document.getElementById("SideBar1").style.width= "250px";
    document.getElementById("SideBarCross").style.display = "block";
    document.getElementById("SideBarDisplay").style.display = "block";
}
function SideBarCloseFunction(){
    
    document.getElementById("SideBar1").style.width= "45px";
    document.getElementById("SideBarCross").style.display = "none";
   
}