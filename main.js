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

do
function genPass ()
{
  //min length of 10 charactes
    //least 3 numbers
    //least 3 symbols
    //lower and upper case
  //use crypto api instead of math.random
}
