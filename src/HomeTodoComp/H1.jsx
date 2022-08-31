import React from 'react'

 function H1(props) {
  return (
    <>
    <h1 className="text-4xl sm:text-5xl font-bold">{props.children}</h1>
    </>
  )
}

export default H1