import React, { useState } from 'react';

const MyUseState004 = () => {
    const [customer, setConstomer] = useState({
        name: "고수",
        address: "서울시 구로구",
        phone: "010-0000-0000",
    });

    const handleChangeName = (e) => {
        //setConstomer({ ...customer, name: e.target.value });
        setConstomer((prevState) => {
            return { ...prevState, name: e.target.value };
        });
    };

    const handleChangeAddress = (e) => {
        setConstomer((prevState) => {
            return { ...prevState, address: e.target.value };
        });
    };

    const handleChangePhone = (e) => {
        setConstomer((prevState) => {
            return { ...prevState, phone: e.target.value };
        });
    };


    return (
        <div>
            <p>
                <span>이름</span>
                <input type="text" onChange={handleChangeName} value={customer.name} />
            </p>


            <p>
                <span>주소</span>
                <input type="text" onChange={handleChangeAddress} value={customer.address} />
            </p>


            <p>
                <span>전화번호</span>
                <input type="text" onChange={handleChangePhone} value={customer.phone} />
            </p>

            <button>확인</button>
            <ul>
                <li>
                    {customer.name},{customer.address},{customer.phone}
                </li>
            </ul>
        </div>
    );
};

export default MyUseState004;