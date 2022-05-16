import "./App.css";
import { useState } from "react";

function Modal({ title, setModal }) {
  return (
    <div className="modal">
      <h2>{title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => setModal(false)}>닫기</button>
    </div>
  );
}

function App() {
  let [post, setPost] = useState(["강남 맛집", "우동 맛집", "초밥 맛집"]);
  let [modal, setModal] = useState(true);

  const onSort = () => {
    console.log("정렬 전 post배열 상태", post);
    var newPost = [...post];
    setPost(newPost.sort());
  };

  const title_1_change = () => {
    var newPost = [...post];
    newPost[0] = "강북 맛집";
    setPost(newPost);
  };

  const title_2_change = () => {
    var newPost = [...post];
    newPost[1] = "참살이 맛집";
    setPost(newPost);
  };

  const title_3_change = () => {
    var newPost = [...post];
    newPost[2] = "신촌 맛집";
    setPost(newPost);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h1>React Blog</h1>
      </div>
      {post.map((pitem) => (
        <div className="list">
          <h2 onClick={() => setModal(false)}>{pitem}</h2>
          <div className="plus">더보기</div>
          {modal && <Modal title={pitem} setModal={setModal} />}
          <p>2월 17일 발행</p>
        </div>
      ))}
      <button onClick={onSort}>정렬</button>
    </div>
  );
}

export default App;
