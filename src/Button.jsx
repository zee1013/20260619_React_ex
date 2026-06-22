// function Button(props){
//     return(
//         <div>
//             <button style={{backgroundColor: props.color, color: props.textColor}}>{props.text}</button>
//         </div>
//     )
// }
// export default Button

// 구조분해 할당

// button.jsx
function Button({ text = "버튼", color = "skyblue", textColor = "pink" }) {
    return (
        <div>
            <button style={{ backgroundColor: color, color: textColor }}>
                {text}
            </button>
        </div>
    )
}
export default Button