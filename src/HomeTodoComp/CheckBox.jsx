import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function CheckBox(props) {

    const onCheckboxChange = () => {
        props.onStatusChange(props.text)
    }

    const onDeleteRow = () => {
        props.onDelete(props.text, props.done);
    }

    return (
        <div className='flex'>
            <input
                className=" focus:ring-yellow-500 "
                type="checkbox"
                checked={props.done}
                onChange={onCheckboxChange}
            />
            <span
                className={'ml-2 -mt-1 text-xl flex flex-col ' + (props.done && 'line-through')}>
                {props.text.title}
            </span>
            <div className="ml-10 flex">
                <MdDeleteForever onClick={onDeleteRow} className='h-6 w-6 text-red-500 mt-1' />
                <FiEdit className='h-5 w-5 text-green-500 ml-2 mt-1' />
            </div>
        </div>
    )
}

export default CheckBox;