import "./App.css";
import { useState } from "react";

function Modal({ title, onToggleModal, modifyTitle, idx }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => modifyTitle(idx)}>수정</button>
      <button onClick={() => onToggleModal(idx)}>닫기</button>
    </div>
  );
}

function App() {
  let [post, setPost] = useState(["강남 맛집", "우동 맛집", "초밥 맛집"]);
  let modified = ["홍대 맛집", "라멘 맛집", "수제버거 맛집"];
  let [modal, setModal] = useState([false, false, false]);
  let [text, setText] = useState("");

  const modifyTitle = (idx) => {
    var newPost = [...post];
    newPost[idx] = modified[idx];
    setPost(newPost);
  };

  const onToggleModal = (idx) => {
    var newModals = [...modal];
    newModals[idx] = !newModals[idx];
    setModal(newModals);
  };

  const onSort = () => {
    console.log("정렬 전 post배열 상태", post);
    var newPost = [...post];
    setPost(newPost.sort());
  };

  const onAddPost = () => {
    console.log("Add Post Complete!");
    var newPost = [...post];
    setPost(newPost.concat(text));
    setText("");
    document.querySelector("#text").value = "";
  };

  const onDeletePost = (idx) => {
    var newPost = [...post];
    newPost.splice(idx, 1);
    setPost(newPost);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h1>React Blog</h1>
      </div>
      {post.map((pitem, idx) => (
        <div className="list">
          <h2>{pitem}</h2>
          <p>2월 17일 발행</p>
          <div className="plus" onClick={() => onToggleModal(idx)}>
            더보기
          </div>
          <div className="plus" onClick={() => onDeletePost(idx)}>
            삭제
          </div>
          {modal[idx] && (
            <Modal
              title={pitem}
              onToggleModal={onToggleModal}
              modifyTitle={modifyTitle}
              idx={idx}
            />
          )}
        </div>
      ))}
      <button onClick={onSort}>정렬</button>
      <input type="text" id="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={onAddPost}>등록</button>
    </div>
  );
}

export default App;
