

function Button(props) {
return(
<button onClick={props.onClick} name={props.name} className={props.className}>{props.value}</button>
);
}
export default Button;