import{ useSelector , useDispatch } from 'react-redux'
import{ useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import {increment , decrement , reset} from '../feature/conterSlice'
import { addtodo, deletetodo,toggletodo } from '../feature/todoSlice';
import { logout } from '../auth/authslice';
function CounterTodo() {

  const count = useSelector((state) => state.counter.counter)
  const [newtodo,setnewtodo] = useState("");
  const todo = useSelector((state)=> state.todo.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (newtodo.trim()) {
      dispatch(addtodo(newtodo.trim()));
      setnewtodo("");
    }
  };
  
  const handlelogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <>
      <div className="container mt-5">
      <div className="card text-center p-4 shadow-lg">
        <h1 className="mb-3">Counter</h1>
        <h2 className="display-4">{count}</h2>
        <div className="btn-group mt-3">
          <button className="btn btn-primary " onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className="btn btn-warning mx-2" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className="btn btn-danger" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>

    
      <div className="card mt-5 p-4 shadow-lg">
        <h2 className="mb-3">TODO List</h2>
        <form onSubmit={submit} className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            value={newtodo}
            onChange={(e) => setnewtodo(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button className="btn btn-success">ADD</button>
        </form>

        <ul className="list-group">
          {todo.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={todo.complet}
                  onChange={() => dispatch(toggletodo(todo.id))}
                />
                <span className={todo.complet ? "text-decoration-line-through text-muted" : ""}>
                  {todo.text}
                </span>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(deletetodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline-danger" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </div>
    </>
  )
}

export default CounterTodo
