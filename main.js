function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.onload = function()
{
  document.getElementById("pass_in").value = "FCDnioas&Sd";
  document.getElementById("charRangeNum").innerHTML = document.getElementById("charRange").value;
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


function genPass ()
{
  //min length of 10 charactes
    //least 3 numbers
    //least 3 symbols
    //lower and upper case
  //use crypto api instead of math.random
  const regex = /[a-zA-Z0-9\.\*\+\?\$\^\/\\]/;
  const length = document.getElementById("charRangeNum");
  const symbol = document.getElementById("checkSymbols").checked;
  const nums = document.getElementById("checkNumbers").checked;

  pass = []

  while(pass.length < 10)
  {
    let buffer = new Uint8Array(1);
    crypto.getRandomValues(buffer);
    char = String.fromCharCode(buffer);
    if(regex.test(char) == true) pass.push(char);
  }
  console.log(pass.join(""));
}
