import React, { useState } from "react";

const MyUseState002 = () => {
    //const [상태, 상태변경함수] = useState(초기값)
    //const [firsr, setfirst] = useState(second)
    // 변수 말고 state에 데이터 저장해서 쓰는 이유
    //state는 변동사항이 생기면 state쓰는 jsx도 자동으로 재렌더링

    const [cnt, setCnt] = useState(0);

    const handleClick = () => {
        setCnt(cnt + 1);
        console.log(`cnt:${cnt}`);

    };
    return (

        <div>
            <p>
                <span1>{cnt}</span1>
                <button onClick={handleClick}>CNT UPDATE</button>
            </p>
        </div>
    );
};

export default MyUseState002;