import { useState } from "react";

function State01() {
    // 상태 변수와 초기값 설정
    let cnt = 0;
    let [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>State01</h1>

            {/* cnt 버튼 */}
            <p>{cnt}</p>
            <button
                onClick={() => {
                    cnt++;
                    console.log("cnt 증가 버튼 클릭됨");
                }}
            >
                cnt 증가
            </button>

            {/* count 버튼 */}
            <p>{count}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                    console.log("count 증가 버튼 클릭됨");
                }}
            >
                count 증가 (state)
            </button>
        </div>
    );
}

// 기본 내보내기
export default State01;