import "./Input.css";

interface Props {
  placeholder?: string;
}

function Input({ placeholder }: Props) {
  return <input type="text" placeholder={placeholder}></input>;
}

export default Input;
