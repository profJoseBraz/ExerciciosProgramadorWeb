import Input from "./Input";
import Button from "./Button";
import TaskContainer from "./TaskContainer";
import "./ToDoList.css";

function ToDoList() {
  return (
    <>
      <div className="input">
        <Input placeholder="Nova tarefa" />
        <Button />
      </div>
      <div className="task-container">
        <TaskContainer />
      </div>
    </>
  );
}

export default ToDoList;
