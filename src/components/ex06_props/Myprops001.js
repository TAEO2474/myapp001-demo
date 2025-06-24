import React from 'react';
//<Myprops002 name="홍길동" age="30" loc="서울" />
// 부모에서 지정한 속성명으로 자식을 받는다.
const Myprops001 = ({ name }) => {
    return (
        <div>
            <h3>this.props : properties</h3>
            <p>Hello,{name}</p>
        </div>
    );
};

export default Myprops001;