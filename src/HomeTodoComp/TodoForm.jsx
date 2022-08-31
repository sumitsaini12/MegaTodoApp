import React, { useState } from 'react'
import Input from './Input'
import Card from './Card'
import Button from './Button'
import H2 from './H2'

function TodoForm(props) {

    const [inputValue, setInputValue] = useState('');

    const updateInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const saveTodoRow = () => {
       
        props.onCreate(inputValue);
        setInputValue('');

        props.onClose();
    }


    return (

        <Card>
            <H2>Create a todo</H2>
            <div className="flex flex-col space-y-3">
                <div>
                    <Input value={inputValue} onChange={updateInputValue} />
                </div>
                <div className="space-x-4">
                    <Button disabled={!inputValue} onClick={saveTodoRow}>Save</Button>
                    <Button onClick={props.onClose} theme="secondary">Cancel</Button>
                </div>

            </div>
        </Card>

    )
}

export default TodoForm;