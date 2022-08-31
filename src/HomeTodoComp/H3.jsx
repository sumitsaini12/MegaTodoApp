import React from 'react'

function H3(props) {
  return (
    <>
      <h3 className="text-2xl sm:text-3xl font-bold">{props.children}</h3>
    </>
  )
}

export default H3;