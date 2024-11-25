import { useState } from "react";

    //React Hooks
    //useState -> 상태를 저장하는 변수 (재렌더링 시에도 계속 유지해야하는 데이터)
    //State 변수 값이 변경 된 경우 -> 재렌더링 re-redering
    //set 함수를 통해서 변경 된 경우
function State01() {
    // 상태 변수와 초기값 설정
    let cnt = 0;
    let [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>State01</h1>

            {/* cnt 버튼 */}
            <p>{cnt}</p>
            <button onClick={() => {
                    cnt++;
                    console.log("클릭됨");
                    console.log(cnt);
                }}>cnt 증가</button>

            {/* count 버튼 */}
            <p>{count}</p>
            <button onClick={() => {
                //count++; //set 함수 사용이 아닌경우, 값은 증가o 재렌더링x
                //setCount( count = count +1 );
                //setCount(1);
            setCount(count + 1);
            console.log("count 증가 버튼 클릭됨");
            }}>count 증가 (state)</button>
        </div>
    );
}

// 기본 내보내기
export default State01;