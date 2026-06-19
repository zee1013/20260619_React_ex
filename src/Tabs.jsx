import { useState } from "react";
import "../src/App.css"

function Tabs(){
    // 탭 내용 더미데이터
    const contents = [
    "🍎 사과 탭 내용입니다.",
    "🍌 바나나 탭 내용입니다.",
    "🍊 오렌지 탭 내용입니다.",
    "🍇 포도 탭 내용입니다.",
  ];

  const [activeTab, setActiveTab] = useState(0)
  // 버튼 클릭시 함수
  

    return(
        <div className="tab-wrap">
            {/* 탭 버튼 */}
            <section className="tab-menu">
                <button onClick={()=>setActiveTab(0)} className={activeTab === 0 ? "active" : ""}>🍎사과</button>
                <button onClick={()=>setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>🍌바나나</button>
                <button onClick={()=>setActiveTab(2)}className={activeTab === 2 ? "active" : ""}>🍊오렌지</button>
                <button onClick={()=>setActiveTab(3)}className={activeTab === 3 ? "active" : ""}>🍇포도</button>
            </section>
            {/* 탭 내용 */}
            <div className="tab-content">
                <h2>{contents[activeTab]}</h2>
            </div>
        </div>
    )
}
export default Tabs