import { memo } from 'react'

function Card(props) {

  
console.log("running to Card tags");
  return (
    <>
<div className="p-5 bg-indigo-500 rounded-md m-2 drop-shadow-lg ">

    {props.children}
</div>



    </>
  )
}

export default memo(Card);
