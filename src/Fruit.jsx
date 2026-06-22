function Fruit({name, price}){
    return(
        <div className="fruit-wrap" style={{ gap:"30px", padding:"10px", borderRadius:"10px", border:"1px solid #ddd"}}>
            <h3>과일 정보</h3>
            <p>이름 : {name}</p>
            <p>가격 : {price}</p>
        </div>
    )
}
export default Fruit