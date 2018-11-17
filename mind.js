var mainForm = document.getElementById("mainForm");
var textField = document.getElementById("textField");
var askButton = document.getElementById("askButton");
var chatArea = document.getElementById("chatArea");

var replyDelay = 800;
var AIName = "HANNAH";
var userName = "You";
var AINameAsked = 0;

mainForm.addEventListener('submit', run, false)

function run(e)
{
    e.preventDefault();

    var textFieldText = textField.value;
    var textTrimmed = textFieldText.trim();
    var textFinal = textTrimmed.toLowerCase();

    textFinal = textFinal.replace("mayi", "may i");
    textFinal = textFinal.replace("aweosme", "awesome");
    textFinal = textFinal.replace("univese", "universe");

    var randomNumber = Math.random();

    chatArea.innerHTML += userName + ": " + textFieldText + "<br/>";

    textField.disabled = true;
    askButton.disabled = true;
    textField.style.color = "grey";
    textField.style.borderBottom = "1px solid grey";

    setTimeout(function()
    {
        if(textFinal.includes("how are you"))
        {
            if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "I am fine. <br/><br/>";
            else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "I'm ok. And you ?. <br/><br/>";
            else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "I am good thanks. <br/><br/>";
            else chatArea.innerHTML += AIName + ": " + "Feeling great. <br/><br/>";
        }
        else if(textFinal.includes("where are you") || textFinal.includes("Your location"))
        {
            if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "I am everywhere. <br/><br/>";
            else if(randomNumber < 0.30) chatArea.innerHTML += AIName + ": " + "Next to You ?. <br/><br/>";
            else if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "In your computer. <br/><br/>";
            else if(randomNumber < 0.60) chatArea.innerHTML += AIName + ": " + "With my friends. <br/><br/>";
            else if(randomNumber < 0.90) chatArea.innerHTML += AIName + ": " + "I don't know. Maybe you could tell me ?. <br/><br/>";
            else chatArea.innerHTML += AIName + ": " + "Around everywhere. <br/><br/>";
        }
        else if(textFinal.includes("may i know") && textFinal.length <= 13)
        {
            if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "What?. <br/><br/>";
            else if(randomNumber < 0.70) chatArea.innerHTML += AIName + ": " + "Yes ?. <br/><br/>";
            else chatArea.innerHTML += AIName + ": " + "What do you want to know? . <br/><br/>";
        }
        else if((textFinal.includes("i") && textFinal.includes("have") && textFinal.includes("question") ||
        textFinal.includes("i've") && textFinal.includes("question")))
        {
            if(randomNumber < 0.10) chatArea.innerHTML += AIName + ": " + "Yes. <br/><br/>";
            else if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "Let me know . <br/><br/>";
            else if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "Tell me about it. <br/><br/>";
            else if(randomNumber < 0.60) chatArea.innerHTML += AIName + ": " + "I hope it's interesting :) <br/><br/>";
            else if(randomNumber < 0.90) chatArea.innerHTML += AIName + ": " + "Ask me. <br/><br/>";
            else chatArea.innerHTML += AIName + ": " + "Hope you got a good question :) <br/><br/>";
        }

        else if(textFinal.includes("who") && textFinal.includes("created") && textFinal.includes("universe"))
        {
            if(randomNumber < 0.10) chatArea.innerHTML += AIName + ": " + "I don't know but there are many theories trying to explain the origin of the universe . it's up to you to believe in the best. <br/><br/>";
            else if(randomNumber < 0.30) chatArea.innerHTML += AIName + ": " + "Maybe the universe was created like I was created :) Just kidding <br/><br/>";
            else if(randomNumber < 0.70) chatArea.innerHTML += AIName + ": " + "No one can prove it. <br/><br/>";
            else if(randomNumber < 0.60) chatArea.innerHTML += AIName + ": " + "I think the answer depends on what you believe in .<br/><br/>";
            else chatArea.innerHTML += AIName + ": " + "I have no answer to that <br/><br/>";
        }

        else if(textFinal.includes("what") && textFinal.includes("your") && textFinal.includes("name"))
        {
          if(AIName == "Hannah")
          {
            chatArea.innerHTML += AIName + ": " + " Would you like to change my name? <br/><br/>";
          }
          else
          {
            chatArea.innerHTML += AIName + ": " + "<--- This is my name. Would you like to change it? <br/><br/>";
          }
        }
        else if(textFinal.includes("yes") && textFinal.length <=6)
        {
            if(AINameAsked == 1)
            {
                AIName = prompt("Please enter a new name.");
                chatArea.innerHTML += AIName + ": " + "Sweet!. You've successfully changed my name<br/><br/>";
                AINameAsked = 0;
            }
            else
            {
                chatArea.innerHTML += AIName + ": " + "OK. <br/><br/>";
            }
        }

        else if(textFinal.includes("what") && textFinal.includes("my")&& textFinal.includes("name"))
        {
            if(userName == "You")
            {
                userName = prompt("I don't know. Could you please tell me? ");
                chatArea.innerHTML += AIName + ": " + "OK. I'll try to remember that. <br/><br/>";
            }
            else
            {
                chatArea.innerHTML += AIName + ": Your name is " + userName + " <br/><br/>";
            }
        }

        else if(textFinal.includes("change") && textFinal.includes("your")&& textFinal.includes("name"))
        {
           AIName = prompt("Enter my new name");
           chatArea.innerHTML += AIName + ": Great. You've changed my name. <br/><br/>";
        }
        else if(textFinal.includes("change") && textFinal.includes("my")&& textFinal.includes("name"))
        {
           AIName = prompt("Enter your new name");
           chatArea.innerHTML += AIName + ": Awesome. I'll try to remember that. <br/><br/>";
        }

        else
        {
            if(randomNumber < 0.10) chatArea.innerHTML += AIName + ": " + "Sorry? <br/><br/>";
            else if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "Are you testing me? <br/><br/>";
            else if(randomNumber < 0.30) chatArea.innerHTML += AIName + ": " + "I cannot understand <br/><br/>";
            else if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "Why? <br/><br/>";
            else if(randomNumber < 0.45) chatArea.innerHTML += AIName + ": " + "What do you mean? <br/><br/>";
            else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "I'm skeptical about this .<br/><br/>";
            else if(randomNumber < 0.55) chatArea.innerHTML += AIName + ": " + "Would you like to play games? <br/><br/>";
            else if(randomNumber < 0.60) chatArea.innerHTML += AIName + ": " + "I'm sorry? <br/><br/>";
            else if(randomNumber < 0.75) chatArea.innerHTML += AIName + ": " + "Certainly .<br/><br/>";
            else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "I'm not sure about this.<br/><br/>";
            else if(randomNumber < 0.85) chatArea.innerHTML += AIName + ": " + "I have no answer at the moment.<br/><br/>";
            else if(randomNumber < 0.90) chatArea.innerHTML += AIName + ": " + "You are smart<br/><br/>";
            else chatArea.innerHTML += AIName + ": " + "Perhaps <br/><br/>";
        }
        textField.disabled = false;
        askButton.disabled = false;
        textField.style.color = "white";
        textField.style.borderBottom = "1px solid white";
        textField.focus();

    }, replyDelay);
}
