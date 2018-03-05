/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var j=document.querySelectorAll("ul.nav.navbar-nav li a");
for(var i=0;i<j.length; i++){
var item=j[i];
item.onmouseover=function (){
this.style["background-color"]= "#fff";
this.style.color = "#000";
};
item.onmouseout = function(){
this.style["background-color"] = "#000";
this.style.color = "#fff";
};
}
/*
 */

var formContact= document.querySelector("form.contact-form");
formContact.onsubmit=function (){
var inputField = document.getElementsByTagName('input');
var txtField= document.querySelector('form textarea[name=message]');

var outPut= Array();
var missingValues = Array();

   for(var i=0;i<inputField.length;i++){
      if(inputField[i].value == ""){
      missingValues.push( inputField[i].getAttribute("name")+'is empty please fill it up ');
   }else{
      outPut.push(inputField[i].getAttribute("name")+ " "+ inputField[i].value);
  }
 }
    if(txtField.value == ""){
       missingValues.push(txtField.getAttribute("name")+ 'is empty, please fill it up ');
       }else{
          outPut.push(txtField.getAttribute("name")+txtField.value);
          }
          if(txtField.value == "" || inputField.value == "" )
          {
          alert(missingValues.join('\n'));
          }
          alert(outPut.join('\n'));

}

var green = document.getElementsByClassName("feature-content-link green-btn")[0];
green.onclick = function(){
green.innerHTML="Jasim";
green.className="feature-content-link blue-btn";
}
var socialMediaLink= document.getElementsByClassName("external")[0];
socialMediaLink.onclick=function(){
console.log(socialMediaLink.href="https://github.com/jasim0776");
socialMediaLink.href="https://github.com/jasim0776";
}







