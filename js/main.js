
//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);

// chat toggle

var convoDesc = document.getElementById("convo_desc");
var startConvo = document.getElementById("input_trigger");
var inputText = document.getElementById("input_text");
var chatArea = document.getElementsByClassName("chat-area")[0];
var textNode = document.getElementById("text_node");
var sendClick = document.getElementById("send_click");
var chatBox = document.querySelector(".chat-box");
var chatToggle = document.querySelector(".chat-toggle");
var chatToggleActive = document.querySelector(".chat-toggle-active");
var paraA = document.querySelector(".p-a");
var paraB = document.querySelector(".p-b")

chatToggle.onclick = function(){
    chatBox.style.display = "block";
    chatToggle.style.display ="none";
    chatToggleActive.style.display = "block";
    paraA.style.display = "block";
    paraB.style.display = "none"
}

chatToggleActive.onclick = function(){
    chatBox.style.display = "none";
    chatToggle.style.display ="block";
    chatToggleActive.style.display = "none";
    convoDesc.style.display = "block";
    chatArea.style.display = "none";

}

startConvo.onclick = function() {
    paraA.style.display = "none";
    paraB.style.display = "block"
    convoDesc.style.display = "none";
    chatArea.style.display = "block";
}

function myFunc() {
    var div = document.createElement("div");
    var x = inputText.value;
    div.innerHTML = x;
    div.classList.add("user-chat", "sb4");

    textNode.appendChild(div);
}

// advice api

fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((out) => {
        document.getElementById("bot-output").innerHTML = out.slip.advice;
}).catch(err => console.error(err));
 

