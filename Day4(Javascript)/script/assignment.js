document.getElementById("hello").style.fontSize = "16px";

function onAlertAppear() {
  const alertBox = document.getElementById("alert");
  alertBox.style.visibility = "visible";
  alertBox.style.height = "125px";

  console.log("visible");
}

function onAlertDisappear() {
  const alertBox = document.getElementById("alert");
  alertBox.style.visibility = "hidden";
  alertBox.style.height = "0px";
}

function btnAlert(e) {
  const goalText = e.target.innerHTML + "를 입력해주세요.";
  const alertBox = document.getElementById("alert");
  const alertText = document.getElementById("alert-text");
  alertBox.style.visibility = "visible";
  alertBox.style.height = "125px";
  alertText.innerText = goalText;
}

for (let i = 0; i < 2; i++) {
  document
    .getElementsByClassName("btn-item")
    [i].addEventListener("click", btnAlert);
}
