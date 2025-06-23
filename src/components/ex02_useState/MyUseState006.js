import React, { useState } from "react";


const MyUseState006 = () => {
    const [customerList, setCustomerList] = useState([
        {
            name: "고수",
            address: "서울시 구로구",
            phone: "010-0000-0000",
        },
        {
            name: "여진구",
            address: "서울시 영등포구",
            phone: "010-1111-1111",
        },
    ]);


    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        phone: "",
    });


    const handleChange = (e) => {
        const { id, value } = e.target;
        //console.log(e.target);
        //console.log(name, id, value);
        setCustomer((prevState) => {
            return { ...prevState, [e.target.id]: e.target.value };
            //return { ...prevState, [id]: value };
        });


        // setCustomer({ ...customer, [e.target.id]: e.target.value });
    };


    const handleCommit = () => {
        setCustomerList([...customerList, customer]);
        setCustomer({
            name: "",
            address: "",
            phone: "",
        });
    };


    return (
        <div>
            <p>
                <span>이름</span>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={customer.name}
                />
            </p>


            <p>
                <span>주소</span>
                <input
                    type="text"
                    name="addres"
                    id="address"
                    onChange={handleChange}
                    value={customer.address}
                />
            </p>


            <p>
                <span>전화번호</span>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={customer.phone}
                />
            </p>


            <button onClick={handleCommit}>확인</button>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                        <th>전화</th>
                    </tr>
                </thead>
                <tbody>
                    {customerList.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.address}</td>
                                <td>{element.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default MyUseState006;




