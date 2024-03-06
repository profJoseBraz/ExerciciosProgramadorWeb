import Input from "./Input";
import Button from "./Button";
import "./ToDoList.css";

function ToDoList() {
  return (
    <>
      <div className="input">
        <Input placeholder="Nova tarefa" />
        <Button />
      </div>
    </>
  );
}

export default ToDoList;
