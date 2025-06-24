import React, { useEffect, useRef, useState } from 'react';

const MyuseRef002 = () => {
    //멤버변수/////////////////////////////////////////////////////////////////////////////////////////////////////
    const nameRef = useRef(""); // 참조변수 //실제 DOM(input창 같은 화면 요소)을 가리키는 ‘참조변수(nameRef.current가 실제 input 요소(집) 주소를 가리킨다)
    const [name, setName] = useState(""); // 상태(데이터)를 저장하는 변수

    // 멤버 함수 1/////////////////////////////////////////////////////////////////////////////////////////////////
    // 이 코드는 버튼을 눌렀을 때 input의 값을 읽고, 다시 비우는 기능 (즉, 이름 넣고 클릭하면 값이 초기화, 이름사라짐)
    const handleBtn = () => {
        console.log(document.querySelector("#data").value);
        setName("");
        document.querySelector("#data").value = "";
        //nameRef.current.focus(); // 다시 커서가 이름입력창으로 자동으로 포커스됨

    };

    //"입력창에 글자 입력할 때마다 그 글자를 위 맴보변수 state에 저장된다
    const handleChange = (e) => {
        setName(e.target.value);
    };

    // 멤버 함수 2 (리액트 HOOK)////////////////////////////////////////////////////////////////////////////////////
    // /화면이 처음 나타날 때,nameRef로 가리키는 input 요소에 자동으로 커서를 넣어줘! (즉, 자동 포커스 해줌)
    useEffect(() => {
        nameRef.current.focus();
    }, [name]);

    //  리턴 (JSX 구조)////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div>
            <input type="text" placeholder="이름입력" id="data" ref={nameRef} Value={name} onChange={handleChange} />
            <button onClick={handleBtn}>click</button>
        </div>
    );
};

export default MyuseRef002;