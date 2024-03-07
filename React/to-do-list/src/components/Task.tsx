import Input from "./Input";
import Button from "./Button";
import './Task.css'

function Task(){
    return(
        <div className="task">
            <Input />
            <Button />
        </div>
    );
}

export default Task;