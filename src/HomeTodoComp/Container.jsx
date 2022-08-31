import React from 'react'

function Container(props) {
    return (
        <>
            <div className="sm:px-64">{props.children}</div>
        </>
    )
}

export default Container;