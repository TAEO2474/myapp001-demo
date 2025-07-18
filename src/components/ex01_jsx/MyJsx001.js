import React from 'react';

/*
  리액트 17이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'react'문을 사용해야 한다.
  그러나 17이후 버전부터는 JSX 구문이 있어도 import React from 'react' 생략 가능하다.
*/

//function MyJsx001 (){} (※리액트에서 아래처럼 'Arrow(화살표) 함수'를 사용한다)
const MyJsx001 = () => {
    return (
        <div>
            <div>Hello</div>
            <div>React</div>
        </div>
    );
};

export default MyJsx001;