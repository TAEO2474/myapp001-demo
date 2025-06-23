import React, { useState } from 'react';

const MyUseState003 = () => {
    const [names, setNames] = useState(["고수", "여진구", "송준기"]);
    const [input, setInput] = useState("");

    const handleChangeNames = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const handleClick = () => {
        setNames([...names, input]);
        setInput("");
    };

    const handleEnter = (e) => {
        if (e.key === "enter") {
            setNames([...names, input]);
            setInput("");
        }
    };




    return (
        <div>
            <input type="text" id="fname" value={input} onChange={handleChangeNames} onKeyDown={handleEnter} />
            <button onClick={handleClick}>ADD</button>
            {names.map((element, index) => {
                return <p key={index}>{element}</p>;
            })}
        </div>
    );
};

export default MyUseState003;