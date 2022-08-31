import { useState, memo } from 'react'
import Button from './Button';


function ProductRow(props) {
console.log("running to ProductRow tags");
    const [number, setNumber] = useState(1);

    const [isAGift, setIsAGift] = useState(false);

    const IncreaseNumber = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
        console.log(number);

    }

    const removeRow = () => {
        props.removeProductRow(props.name)
    }


    const DecreaseNumber = () => {
        setNumber(number - 1)
        console.log(number);
    }

    const toggleGift = () => {
        setIsAGift(!isAGift);
    }


    let ButtonText = "Gift Wrap it";
    let colorClass = "bg-fuchsia-700";
    let ButtonColor = "secondary";


    if (isAGift) {
        ButtonText = "Remove Gift Wrap";
        colorClass = "bg-green-500";
        ButtonColor = "light";
    }
    let Btn;

    if (number == 0) {
        Btn = 'disable';
    }

    return (
        <>
            <div className={"p-2 rounded-md m-2 drop-shadow-lg " + colorClass}>
                <h1 className="text-3xl font-medium mb-1 text-white">{props.children}</h1>
                <div className="flex justify-between">
                    <div className="flex">
                        <Button disable={props.Btn} onClick={DecreaseNumber}>-</Button>
                        <span className="ml-2 mr-2 mt-3">How many: {number} </span>
                        <Button onClick={IncreaseNumber}>+</Button>
                        <div className="ml-4">
                            <Button onClick={toggleGift} theme={ButtonColor}>{ButtonText}</Button>
                        </div>
                    </div>
                    <div>
                        <Button onClick={removeRow}>Removed!..</Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(ProductRow);