import { useState, useCallback } from 'react'
import Card from './ProductTodoComp/Card';
import Button from './ProductTodoComp//Button';
import ProductRow from './ProductTodoComp/ProductRow';

function ProdectTodo(props) {

  console.log("running to Product Page Tag");

  const [name, setName] = useState("");

  const [productList, setProductList] = useState([]);


  const textChange = (event) => {
    setName(event.target.value);
  }

  const addToCard = () => {
    setProductList([...productList, name]);
    setName("");
  }

  const removeProductRow = useCallback((productToBeRemoved) => {
    const newProductList = productList.filter(product => product !== productToBeRemoved);
    setProductList(newProductList);

  }, [productList]);

  return (

    <>
      <Card>
        <input value={name} onChange={textChange} placeholder='Enter Product Name' className='p-2 rounded-md border barder-gray-700 text-xl mr-4' />
        <Button onClick={addToCard} theme="light">Add to Card</Button>
      </Card>
      <span className="text-2xl text-red-700 ml-4">Total Product Count:- {productList.length}</span>

      {productList.length > 0 && <Card>
        {productList.map(pn => <ProductRow removeProductRow={removeProductRow} name={pn} key={pn}>{pn}</ProductRow>)}
      </Card>}



    </>
  )
}

export default ProdectTodo;
