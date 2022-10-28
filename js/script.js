const button = document.createElement("button");
button.innerHTML = "Ask";

const body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function giveAnswer() {
  const resp = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  const item = resp[Math.floor(Math.random() * resp.length)];  
  const content = document.createTextNode(item);
  answer.appendChild(content); 

  document.getElementById("answers").innerHTML = item;  
});

giveAnswer();

 
