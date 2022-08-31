import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="h-20 w-ful flex  justify-between shadow-lg">
      <span className="lg:pl-64 mt-4 sm:pl-20 md:pl-32 text-4xl text-yellow-400 font-bold">Todo App</span>
      <div className="mt-6">
      <Link className="px-8 py-2 text-xl font-medium hover:bg-gray-400" to="/home">Home</Link>
      <Link className="px-8 py-2 text-xl font-medium hover:bg-gray-400" to="/listtodo">ListTodo</Link>
      <Link className="px-8 py-2 text-xl font-medium hover:bg-gray-400" to="/producttodo">ProductTodo</Link>
      </div>
    </div>
  )
}


export default Header;