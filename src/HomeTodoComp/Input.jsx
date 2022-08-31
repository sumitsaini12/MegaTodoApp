import React from 'react'

function Input(props) {
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder='Write an article about XState'
        className="text-xl border py-2 px-5 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      />

    </>
  )
}

export default Input;