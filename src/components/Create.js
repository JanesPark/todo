import React, { useState } from "react";
import styles from "../css/create.module.css";

const Create = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  //필요한 value를 찾는 함수
  const todoWrite = (e) => {
    setValue(e.target.value);
    // console.log(setValue(e.target.value)); 
  };

  //실질적으로 추가해주는 함수
  const todoListAdd = (e) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };

  return (
    
      <form onSubmit={todoListAdd}>
        <input className={styles.input}
          placeholder="오늘 할일을 입력해주세요!"
          value={value}
          onChange={todoWrite}
        ></input>
        <button className={styles.btn}>✚</button>
      </form>
    
  );
};

export default Create;