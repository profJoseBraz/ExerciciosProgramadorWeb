import { ChangeEvent } from "react";
import "./MyInput.css";
import MyButton from "./MyButton";

interface Props {
    type: string;
    placeholder?: string;
    bgColor?: string;
    value?: string;

    //A propriedade onChange do MyInput serve para permitir lidar com as alterações de conteúdo do campo
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function MyInput({ type, placeholder, bgColor, value, onChange }: Props) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                style={{ backgroundColor: `${bgColor}` }}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default MyInput;
