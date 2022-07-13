import React, { useState } from "react";
import styles from "./css/style.module.css";
import Create from "./components/Create";
import List from "./components/List";
import moment from "moment";

function App() {

  //moment.js 이용
  const today = moment().format("YYYY-MM-DD");
  const day = moment().format("ddd");

  //todo를 하나하나 넣기위한 빈배열
  const [todos, setTodos] = useState([]);

  //text를 넣지 않으면 넣으라고 경고 메세지 출력
  const handleAddTodo = (text) => {
    if (text === "") {
      return alert("오늘 할일을 입력해 주세요!!!!!");
    } else {
      const todo = {
        id: todos.length,
        text,
        checked: false,
      };
      setTodos([...todos].concat(todo));
    }
  };

  const handleRemove = (id) => {
    //filter를 이용해 삭제 기능 구현
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleChecked = (id) => {
  
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.today}>☺︎ <i>{today} ∙ {day}</i></p>
      </div>
      <h1 className={styles.title}> 📝 TO-DO LIST ({todos.length}) </h1>
      <Create handleAddTodo={handleAddTodo} />
      <List todos={todos} 
        handleRemove={handleRemove}
        handleChecked={handleChecked}
      />
    </div>
  );
}

export default App;