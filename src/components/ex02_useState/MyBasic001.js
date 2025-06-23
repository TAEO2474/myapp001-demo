import React from 'react';

const MyBasic001 = () => {
    let cnt = 0;
    const handleClick = () => {
        cnt = cnt + 1;
        console.log(`cnt:${cnt}`);

    };
    return (

        <div>
            <p>
                <span1>{cnt}</span1>
                <button onClick={handleClick}>CNT UPDATE</button>
            </p>
        </div>
    );
};

export default MyBasic001;