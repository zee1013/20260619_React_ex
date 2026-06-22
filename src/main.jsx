import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tabs from './Tabs.jsx'
import Menu_hover from './Menu_hover.jsx'
import Button from './button.jsx'
import PropsEx from './Props_ex.jsx'
import WorkCard from './WorkCard.jsx'
import Fruit from './Fruit.jsx'
const fruitList = [
    { name: "사과", price: 1000 },
    { name: "바나나", price: 1500 },
    { name: "포도", price: 2000 },
  ];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tabs/>
    <Menu_hover/>
    {/* props 활용 - 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방식 */}
    <Button text="로그인" color="pink" textColor="white"/>
    <Button text="회원가입" color="gray" textColor="pink"/>
    <PropsEx name="홍길동"/>
    <div className="card-content">
    <WorkCard title="클론코딩" year="2026.04.05 - 04.10" tool="HTML, CSS, JS" img="../public/images/coffee-gray.jpg"/>
    <WorkCard title="UI/UX" year="2026.04.05 - 04.10" tool="Figma" bg="pink" img="../public/images/coffee-blue.jpg"/>
    <WorkCard title="리디자인" year="2026.04.05 - 04.10" tool="Figma" img="../public/images/coffee-pink.jpg"/>
    </div>

    {/* map 사용 props 가져오기 */}
    {fruitList.map((fruits, index)=>(
      <Fruit key={index} name={fruits.name} price={fruits.price}/>
    ))}
    {/* <Fruit/> */}
  </StrictMode>,
)
