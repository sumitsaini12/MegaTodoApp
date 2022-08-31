import React from 'react'

function H2(props) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold">{props.children}</h2>
    </>
  )
}

export default H2;