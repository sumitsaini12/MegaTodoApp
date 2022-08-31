import React from 'react'


function Button(props) {

    let themeClasses = "bg-yellow-500 border-700 focus:border-yellow-700  text-white ";

    let radiusClass = "rounded-md"

    if (props.theme === "highlight") {
        radiusClass = "rounded-full";
    }

    if (props.theme === "secondary") {
        themeClasses = "bg-white border-gray-700 focus:border-black";
    }


    return (
        <>
            <button
                disabled={props.disabled}
                className={"px-6 py-2 rounded-md border text-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " + themeClasses + " " + radiusClass}
                onClick={props.onClick}
            >
                {props.icons && <span className="mr-2 text-2xl -mt-inline-block">{props.icons}</span>}
                {props.children}
            </button>

        </>
    )
}


export default Button