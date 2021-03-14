var messages =  document.getElementById("messages");
var textbox =  document.getElementById("textbox");
var button =  document.getElementById("button");

button.addEventListener("click",function(){
    const newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});


var messages1 =  document.getElementById("messages1");
var textbox1 =  document.getElementById("textbox1");
var button1 =  document.getElementById("button1");

button1.addEventListener("click",function(){
    const newMessage = document.createElement("li");
    newMessage.innerHTML = textbox1.value;
    messages1.appendChild(newMessage);
    textbox1.value = "";
});