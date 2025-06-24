import React, { useEffect, useState } from 'react';
/*
   useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
      특정작업(side effect) : Time(setTimeout), Ajax
      useEffect : useEffect는 side effect라는 뜻이다.

     ※ 리액트에서 마운트(mount)는 ‘컴포넌트가 처음 화면에 나타나는 순간’
     ※ 리액트에서 언마운트: '컴포넌트가 화면에서 사라지는 순간'

      useEffect 4가지 종류:
      1. useEffect(callback) : 마운트(브라우저 화면에 딱 보이기 시작하는 시점) 후, 리렌더링 될때마다
      2. useEffect(callback, []) : 마운트 후
      3. useEffect(callback, [state]) : 마운트 후, state
      4. useEffect(callback, {return ();}, []) : 마운트 후, 언마운트 전
*/

const MyUseEffect001 = () => {
    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickName(e.target.value);
    };

    // useEffect(() => {
    //     console.log("렌더링이 되어었습니다");
    // });


    // useEffect(() => {
    //     console.log(" 렌더링이 되어었습니다");
    // }, []);

    // useEffect(() => {
    //     console.log("name 렌더링이 되어었습니다");
    // }, [name]);

    // useEffect(() => {
    //     console.log("nickName 렌더링이 되어었습니다");
    // }, [nickName]);

    // useEffect(() => {
    //     console.log("name과 nickName 렌더링이 되어었습니다");
    // }, [name, nickName]);

    const handleCleanUp = () => {
        alert("현재 컴포넌트를 나갔니다.");
    };


    useEffect(() => {
        console.log(" ㄴㄴ렌더링이 되었습니다.");
        // return () => {
        //   alert("현재 컴포넌트를 나갔니다.");
        // };


        return handleCleanUp;
    }, []);



    return (
        <div>
            <input type="text" placeholder="name" value={name} onChange={onChangeName} />
            <input type="text" placeholder="nickName" value={nickName} onChange={onChangeNickName} />
            {/*onChange={onChangeName} 이게 브라우저에서 사용자가 이름을 입력하면 값이 이곳으로 받아서 위에 해당 화살표함수로 이동하고 멤버변수로 저장  */}
        </div>
    );
};

export default MyUseEffect001;