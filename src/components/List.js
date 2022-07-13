import styles from "../css/list.module.css";
import { CheckOutlined, DeleteFilled } from "@ant-design/icons";

//{ todos }를 하면  props.todos 를 안써줘도 된다
function List({ todos, handleRemove, handleChecked }) {
  
  
  return (
    <ul className={styles.container}>
      {todos.map((todo, index) => {
        return (
          <li key={index} className={styles.list}>
            <div className={styles.list__con}>
              <p className={`${todo.checked ? styles.checked : ""}`}>{todo.text}</p>
              <div className={styles.list__btn}>
                <CheckOutlined onClick={()=> handleChecked(todo.id)} />
                <p>&nbsp;&nbsp;</p>
                <DeleteFilled onClick={()=> handleRemove(todo.id)} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;