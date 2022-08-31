import { useState, memo } from 'react'



function Button(props) {

console.log("running to Button tags")
    let theme = "bg-indigo-500 border-indigo-700 text-white";


    if (props.theme === "secondary") {
        theme = "bg-red-500 border-red-700 text-gray-700";
    } else if(props.theme==="light"){

        theme = "bg-yellow-500 border-yellow-700 text-white"
    }


    return (
        <>
            <button onClick={props.onClick} className={"px-4 py-2 text-2xl border rounded-md shadow-sm " + theme }>{props.children}</button>

        </>
    )
}

export default memo(Button);
