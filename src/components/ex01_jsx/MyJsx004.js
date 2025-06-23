import React from 'react';

const MyJsx004 = () => {
    const name = "react";

    return (
        <div>

            {/* 삼항조건연사자 */}
            {name == "react" ? <h1>리액트입니다.</h1> : <h2>리액트가 아닙니다.</h2>}

            {name == "react" ? <h1>리액트입니다.</h1> : null}

        </div>
    );
};

export default MyJsx004;