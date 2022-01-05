function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

window.onload = function()
{
  document.getElementById("pass_in").value = "FCDnioas&Sd";
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
