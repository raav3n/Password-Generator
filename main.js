function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.onload = function()
{
  document.getElementById("charRangeNum").innerHTML = document.getElementById("charRange").value;
  document.getElementById("checkSymbols").checked = true;
  document.getElementById("checkNumbers").checked = true;

  genPass();
}

document.getElementById("pass_in").addEventListener("click", function()
{
  const clip = navigator.clipboard;
  const password = document.getElementById("pass_in").value;

  clip.writeText(password);


  document.getElementById("copy").classList.add("transparent");

  document.getElementById("pass_in").style.backgroundColor = "#b3e6cc";

  sleep(1000).then(() => {
    document.getElementById("copy").classList.remove("transparent"),
    document.getElementById("pass_in").style.backgroundColor = "";
  });
});

document.getElementById("pass_in").addEventListener("mousedown", function(event)
{
  event.preventDefault();
});

//Event Listerns for Option Change
document.getElementById("charRange").addEventListener("input", function()
{
  document.getElementById("charRangeNum").innerHTML = document.getElementById("charRange").value;
  genPass();
});
document.getElementById("checkSymbols").addEventListener("change", genPass);
document.getElementById("checkNumbers").addEventListener("change", genPass);


function genPass()
{
  //min length of 10 charactes
    //least 3 numbers
    //least 3 symbols
    //lower and upper case
  //use crypto api instead of math.random

  //all characters
  const regex = /[a-zA-Z0-9\.\*\+\?\$\^\/\\]/;

  //letters and Symbols
  const regex_ls = /[a-zA-Z\.\*\+\?\$\^\/\\]/;

  //letters and Numbers
  const regex_ln = /[a-zA-Z0-9]/;

  //letters
  const regex_l = /[a-zA-Z]/;

  const length = document.getElementById("charRangeNum").innerHTML;
  const symbol = document.getElementById("checkSymbols").checked;
  const nums = document.getElementById("checkNumbers").checked;

  pass = []

  console.log(length);

  while(pass.length < length)
  {
    //generate a random character
    let buffer = new Uint8Array(1);
    crypto.getRandomValues(buffer);
    char = String.fromCharCode(buffer);

    if(symbol == true & nums == true) if(regex.test(char) == true) pass.push(char);
    if(symbol == false & nums == true) if(regex_ln.test(char) == true) pass.push(char);
    if(symbol == true & nums == false) if(regex_ls.test(char) == true) pass.push(char);
    if(symbol == false & nums == false) if(regex_l.test(char) == true) pass.push(char);
  }

  document.getElementById("pass_in").value = pass.join("");
}

document.getElementById("btnText").addEventListener("click", genPass)
