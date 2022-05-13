import "./App.css";
import { useState } from "react";
import { NavItem } from "react-bootstrap";

function App() {
  let [anam, setAnam] = useState("안암 맛집");
  let [post, setPost] = useState([
    {
      id: 1,
      title: "하스 밤샘맛집",
    },
    {
      id: 2,
      title: "문캠 밤샘맛집",
    },
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>React Blog</h1>
      </div>
      <div className="list">
        <h2>{anam}</h2>
        <p>2월 17일 발행</p>
        <button onClick={() => setAnam("신촌 맛집")}>변경</button>
      </div>
      {post.map((item) => (
        <div className="list" key={item.id}>
          <h2>{item.title}</h2>
          <p>2월 17일 발행</p>
        </div>
      ))}
    </div>
  );
}

export default App;
