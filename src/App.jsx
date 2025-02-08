import { BrowserRouter , Route , Routes } from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"
import CounterTodo from "./components/CounterTodo"
import NotFound from "./components/NotFound"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/countertodo" element={<CounterTodo/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
