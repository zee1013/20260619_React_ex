// import Button from "./button"

// function PropsEx(props){
//     return(
//         <div>
//             <h1>안녕~ {props.name}님! 반갑습니다.</h1>
//             <Button text="하이" color="blue" textColor="navy"/>
//             <Button text="확인" color="skyblue" textColor="orange"/>
//         </div>
//     )
// }
// export default PropsEx

import Button from "./button"

function PropsEx({ name = "게스트" }) {
    return (
        <div>
            <h1>안녕~ {name}님! 반갑습니다.</h1>
            <Button text="하이" color="blue" textColor="navy"/>
            <Button text="확인" color="skyblue" textColor="white"/>
        </div>
    )
}
export default PropsEx