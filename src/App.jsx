import Header from './Header'
import HomeTodo from './HomeTodo'
import ListTodo from './ListTodo'
import ProductTodo from './ProductTodo'
import { Routes, Route } from "react-router-dom";


function App() {



  return (
    <>
      <Header />
<Routes>
  <Route index element={<HomeTodo />} />
  <Route path="home" element={<HomeTodo />} />
  <Route path="listtodo" element={<ListTodo />} />
  <Route path="producttodo" element={<ProductTodo />} />

</Routes>

    </>
  )
}

export default App



{/* <HomeTodo /> */ }