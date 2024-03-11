import './MyInput.css'

interface Props{
    type: string;
    placeholder?: string;
    bgColor?:string;
}

function MyInput({type, placeholder, bgColor} : Props){
    return(
        <input type={type} placeholder={placeholder} style={{backgroundColor:`${bgColor}`}}/>
    );
}

export default MyInput;