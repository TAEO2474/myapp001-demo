import React from 'react';
/*
 props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
 컴포넌트 자식은 해당 props를 읽기 전용으로만 사용할 수 있다.
 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
*/

const Myprops002_1 = ({ loc }) => {
    return (
        <div style={{ backgroundColor: "red" }}>
            <p>loc :{loc}</p>
        </div>
    );
};

export default Myprops002_1;