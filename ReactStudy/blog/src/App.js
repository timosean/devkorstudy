import "./App.css";
import { useState } from "react";
import { NavItem } from "react-bootstrap";

function App() {
  let [post, setPost] = useState(["강남 맛집", "정후 맛집", "안암 맛집"]);

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
      <div className="list">
        <h2>{post[0]}</h2>
        <p>2월 17일 발행</p>
        <button onClick={title_1_change}>수정</button>
      </div>
      <div className="list">
        <h2>{post[1]}</h2>
        <p>2월 17일 발행</p>
        <button onClick={title_2_change}>수정</button>
      </div>
      <div className="list">
        <h2>{post[2]}</h2>
        <p>2월 17일 발행</p>
        <button onClick={title_3_change}>수정</button>
      </div>
      <hr />
      <button onClick={onSort}>정렬</button>
    </div>
  );
}

export default App;
