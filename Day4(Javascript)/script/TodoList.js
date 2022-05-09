//투두아이템에 마우스 올릴 시 삭제버튼 등장 기능
function todoitemHover() {
  const todoItems = document.getElementsByClassName("todo-item");
  const trashcan = document.getElementsByClassName("fa-trash");
  const pencils = document.getElementsByClassName("fa-pencil");
  for (let i = 0; i < todoItems.length; i++) {
    todoItems[i].addEventListener("mouseover", function () {
      trashcan[i].style.visibility = "visible";
      trashcan[i].style.opacity = "1";
      pencils[i].style.visibility = "visible";
      pencils[i].style.opacity = "1";
    });
    todoItems[i].addEventListener("mouseout", function () {
      trashcan[i].style.visibility = "hidden";
      trashcan[i].style.opacity = "0";
      pencils[i].style.visibility = "hidden";
      pencils[i].style.opacity = "0";
    });
  }
}

//남은 할 일 개수 업데이트
function updateNum() {
  const todoItems = document.getElementsByClassName("todo-item");
  let leftnum = document.querySelector("#left-num");
  leftnum.innerHTML = todoItems.length + "개 남음";
}

//오늘 날짜로 업데이트
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();
const daylist = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const today_ymd = document.querySelector("#date");
const today_day = document.querySelector("#day");
today_ymd.innerHTML = year + "년 " + month + "월 " + date + "일";
today_day.innerHTML = daylist[day];

//할 일 추가기능
const inputField = document.querySelector("#addcontent");
let inputContext;
inputField.addEventListener("change", function (e) {
  inputContext = e.target.value;
});

const addButton = document.querySelector("#addbtn");
const todolist = document.querySelector(".todo-list");
addButton.addEventListener("click", function () {
  const newtodo = document.createElement("div");
  newtodo.classList.add("todo-item");

  const checkicon = document.createElement("i");
  checkicon.classList.add("fa-regular", "fa-circle-check");

  const contextspan = document.createElement("span");
  contextspan.innerHTML = inputContext;

  const pencilicon = document.createElement("i");
  pencilicon.classList.add("fa-solid", "fa-pencil");

  const trashicon = document.createElement("i");
  trashicon.classList.add("fa-solid", "fa-trash");

  newtodo.append(checkicon, contextspan, pencilicon, trashicon);
  todolist.appendChild(newtodo);

  updateNum();
  deleteItem();
  todoitemHover();
  changeTodo();

  inputContext = "";
  inputField.value = "";
});

//할 일 삭제기능
function deleteItem() {
  var deleteButtons = document.querySelectorAll(".fa-trash");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function (e) {
      console.log(deleteButtons.length);
      const todolst = e.target.parentNode.parentNode;
      todolst.removeChild(e.target.parentNode);
      updateNum();
    });
  }

  todoitemHover();
}

//할 일 수정기능
function changeTodo() {
  var pencilButtons = document.querySelectorAll(".fa-pencil");
  for (let i = 0; i < pencilButtons.length; i++) {
    pencilButtons[i].addEventListener("click", function (e) {
      //수정하기 창 나타나기
      const editbox = document.querySelector(".todo-edit");
      editbox.style.opacity = "1";
      editbox.style.visibility = "visible";

      //원래 있던 할 일 내용 가져와서 보여주기
      const editinput = document.querySelector("#edit-content");
      const tditem = e.target.parentNode;
      var tdcontext = tditem.innerText;
      editinput.value = tdcontext;

      //완료 버튼 누르면 수정완료
      const submitbtn = document.querySelector("#submit");
      submitbtn.addEventListener("click", function () {
        editinput.addEventListener("change", function (e) {
          var closestspan = e.target.closest("span");
          closestspan.innerText = e.target.value;
        });
        const editbox = document.querySelector(".todo-edit");
        editbox.style.opacity = "0";
        editbox.style.visibility = "hidden";
      });
    });
  }
}

//수정하기 취소
const cancelbtn = document.querySelector("#cancel");
cancelbtn.addEventListener("click", function () {
  const editbox = document.querySelector(".todo-edit");
  editbox.style.opacity = "0";
  editbox.style.visibility = "hidden";
});

todoitemHover();
deleteItem();
changeTodo();
