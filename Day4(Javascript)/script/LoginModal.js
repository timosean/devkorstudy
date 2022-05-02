document.querySelector(".loginbtn").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show-modal");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show-modal");
});

document.querySelector("form").addEventListener("submit", function (e) {
  const idInput = document.querySelector("#id");
  const pwInput = document.querySelector("#pw");
  if (idInput.value == "" || pwInput.value == "") {
    e.preventDefault();
    alert("내용을 입력해주세요");
  } else if (pwInput.value.length < 6) {
    e.preventDefault();
    alert("비밀번호는 최소 6글자 이상 입력해주세요.");
  }
});

var count = 0;
const badge = document.querySelector(".badge");
badge.addEventListener("click", function () {
  count++;

  if (count % 2) {
    badge.innerText = `다크모드🌜`;
  } else {
    badge.innerText = `라이트모드🌞`;
  }
});

const brand = document.querySelector(".navbar-brand");
const clausebox = document.querySelector("#clause");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    brand.style.fontSize = "16px";
  } else {
    brand.style.fontSize = "30px";
  }
});

clausebox.addEventListener("scroll", function () {
  if (clausebox.scrollTop + clausebox.clientHeight == clausebox.scrollHeight) {
    alert("약관을 다 읽으셨습니다!");
  }
});

let seccount = document.querySelector(".sec").innerHTML;
setInterval(function () {
  if (seccount > 0) {
    seccount--;
    document.querySelector(".sec").innerHTML = seccount;
  } else {
    document.querySelector(".alert").style.display = "none";
  }
}, 1000);
