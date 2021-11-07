import React from 'react'

function Demo(props) {
    return (
        <p>{props.show ? "This is New" : ""}</p>
    )
}

export default React.memo(Demo);
