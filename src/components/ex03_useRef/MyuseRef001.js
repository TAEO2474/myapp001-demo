import React, { useRef, useState } from 'react';
/*
 state : state 변경  -> 리렌더링 발생함 -> state 초기화 안됨
 ref : ref 변경-> 리렌더링 발생안됨 -> ref 초기화 안됨
 variable : variable -> 리렌더링 발생안됨 -> variable 초기화 됨




 리렌더링 발생(컴포넌트 업데이트)
 1. state가 바뀔 때
 2. props가 바뀔 때
 3. 부모 컴포넌트가 리렌더링될 때
 4. foreUpdate( )로 강제로 렌더링을 트리거할때 


 useRef( )
 1. 상태정보
 2. DOM 접근


 DOM을 꼭 사용해야 하는 경우
 1. 특정 input에 포커스 주기
 2. 스크롤 박스 조작하기
 3. Canvas 요소에 그림 그리기 등
*/

const MyuseRef001 = () => {
    const [count, setCount] = useState(0); // useState가 상단에 import되어 있어야한다
    const countRef = useRef(0);
    let countLet = 0;
    //console.log(countRef);  확인용 콘솔

    //useState — 화면에 보여지는 값이 바뀌어야 할 때
    // /예시: 쇼핑몰 장바구니 수량
    // 사용자가 “+” 버튼을 누르면 수량이 늘어나고, 그 수량이 바로 화면에 보여져야할 경우
    const upCountState = () => {
        setCount(count + 1);
    }

    //  useRef — 화면엔 안 보이지만, 값은 기억하고 싶을 때,
    // 예시 1: 이전 값 기억 (ex: 입력 전 값과 후 값 비교)
    // 예시 2: 특정 input에 포커스 주기 (로그인 창에서 페이지 열자마자 자동으로 입력창에 커서 들어가게 하려면 ref 필요)
    const upCountRef = () => {
        console.log("countRef=>", countRef);
        countRef.current = countRef.current + 1;
    }

    //let — 리렌더링 필요 없는, 일시적인 값 저장
    // 예시: 버튼 클릭 횟수 임시 추적
    //화면에 굳이 안 보여줘도 되는 값 (ex: 추적용 로그, 디버깅)이라면 let으로 충분해요.
    // 단점: 리렌더링되면 초기화되기 때문에 상태로 저장할 필요가 없는 값에만 사용해야 해요.

    const upCountLet = () => {
        countLet = countLet + 1;
        console.log("Variable:", countLet);
    };

    return (
        <div>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <p>Variable : {countLet}</p>
            <button onClick={upCountState}>State</button>
            <button onClick={upCountRef}>Ref</button>
            <button onClick={upCountLet}>Variable</button>
        </div>
    );
};

export default MyuseRef001;