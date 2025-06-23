import React, { useState } from 'react';

const MyUseState005 = () => {
    const [customer, setConstomer] = useState({
        name: "고수",
        address: "서울시 구로구",
        phone: "010-0000-0000",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        //console.log(e.target);
        //console.log(name, id, value);
        setConstomer((prevState) => {
            return { ...prevState, [id]: value };
            //return { ...prevState, [e.target.id]: e.target.value };
        });

        //setConstomer({ ...customer, [e.target.id]: e.target.value });
    };



    return (
        <div>
            <p>
                <span>이름</span>
                <input type="text" name="name" id="name" onChange={handleChange} value={customer.name} />
            </p>


            <p>
                <span>주소</span>
                <input type="text" name="address" id="address" onChange={handleChange} value={customer.address} />
            </p>


            <p>
                <span>전화번호</span>
                <input type="text" name="phone" id="phone" onChange={handleChange} value={customer.phone} />
            </p>


            <button>확인</button>
        </div>
    );
};

export default MyUseState005;