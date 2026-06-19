import { useState } from "react"

function App(){
  const [color, setColor] = useState("red")
  function handleChange(e){
    setColor(e.target.value)
  }
  return(
  <div>
    <section>
      <h1>좋아하는 색</h1>
      <select onChange={handleChange} value={color} style={{padding:"10px", marginTop:"20px"}}>
        <option value="red">🍎빨강🍎</option>
        <option value="green">🎄초록🎄</option>
        <option value="blue">💎파랑💎</option>
        <option value="yellow">🎁노랑🎁</option>
      </select>
      <p>당신이 선택한 색은 <strong style={{color:color}}>{color}</strong></p>
    </section>
  </div>
  )
}
export default App