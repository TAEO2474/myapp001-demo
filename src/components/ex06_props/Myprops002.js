import React from 'react';
import Myprops002_1 from './Myprops002_1';
//<Myprops002 name="홍길동" age="30" loc="서울" />
// 부모에서 지정한 속성명으로 자식을 받는다.
//자식에서 속성값을 받을 때 속성명 순서는 상관없다.

// const Myprops002 = ({ name, age, loc }) => {
//     return (
//         <div>
//             <p>고객이름:{name} 나이:{age} 지역:{loc}</p>
//         </div>
//     );
// };


// 부모에서 넘겨준 속성을  받을 때 자식에서 임의 변수를 선언하면 된다.
//하지만관용적으로 props로 사용한다. (properties 속성)
// App.js에서 받을 변수가 많을때 는 prop로 선언
const Myprops002 = (props) => {
    return (
        <div>
            <p>고객이름:{props.name} 나이:{props.age} 지역:{props.loc}</p>
            <Myprops002_1 loc={props.loc} />
        </div>
    );
};

export default Myprops002;