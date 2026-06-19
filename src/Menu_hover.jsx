import { useState } from "react";
import "../src/App.css";
function Menu_hover() {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <section>
      <ul className="gnb">
        <li
          onMouseEnter={() => setActiveMenu(0)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          About
          {activeMenu === 0 && (
            <ul className="sub">
              <li>회사 소개</li>
              <li>연혁</li>
              <li>오시는 길</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setActiveMenu(1)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Product
          {activeMenu === 1 && (
            <ul className="sub">
              <li>신제품</li>
              <li>인기상품</li>
              <li>이벤트상품</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => setActiveMenu(2)}
          onMouseLeave={() => setActiveMenu(null)}>menu3
          {activeMenu === 2 && (
            <ul className="sub">
              <li>신제품</li>
              <li>인기상품</li>
              <li>이벤트상품</li>
            </ul>
          )}
          </li>
        <li onMouseEnter={() => setActiveMenu(3)}
          onMouseLeave={() => setActiveMenu(null)}>menu4
            {activeMenu === 3 && (
            <ul className="sub">
              <li>신제품</li>
              <li>인기상품</li>
              <li>이벤트상품</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={() => setActiveMenu(4)}
          onMouseLeave={() => setActiveMenu(null)}>menu5
            {activeMenu === 4 && (
            <ul className="sub">
              <li>신제품</li>
              <li>인기상품</li>
              <li>이벤트상품</li>
            </ul>
          )}
        </li>
      </ul>
    </section>
  );
}
export default Menu_hover;
