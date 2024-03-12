import { ChangeEvent } from 'react';
import './MyInput.css'

interface Props{
    type: string;
    placeholder?: string;
    bgColor?:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function MyInput({type, placeholder, bgColor, onChange} : Props){
    return(
        <input 
        type={type} 
        placeholder={placeholder} 
        style={{backgroundColor:`${bgColor}`}} 
        onChange={onChange}/>
    );
}

export default MyInput;