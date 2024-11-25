import React, { useState } from "react";
import logo from '../logo.svg';
import './Practice001.css';

function Practice001() {
    const texts = ["하나", "둘", "셋"]; // 순환할 텍스트 배열
    const [index, setIndex] = useState(0); // 현재 텍스트의 인덱스 관리

    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // 0 → 1 → 2 → 0 순환
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {texts[index]}</p> {/* 현재 텍스트 출력 */}
                <button className="App-button" onClick={handleClick}>
                    변경버튼
                </button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Practice001;
