import React from 'react'

function Card(props) {
    return (
        <div className="p-6 shadow space-y-4 ">
      {props.children}
        </div>
    )
}

export default Card;