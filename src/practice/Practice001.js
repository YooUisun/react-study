import React, { useState } from "react";
import '../practice/Quiz001';

function Practice001() {
    const texts = ["하나", "둘", "셋"]; // 순환할 텍스트
    const [index, setIndex] = useState(0); // 현재 텍스트 인덱스

    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // 0 → 1 → 2 → 0...
    };

    return (
        <div className="practice-container">
            <p className="text-display">{texts[index]}</p>
            <button className="change-button" onClick={handleClick}>
                변경
            </button>
        </div>
    );
}

export default Practice001;