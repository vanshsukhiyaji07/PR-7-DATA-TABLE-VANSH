import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="lead text-center">
        <strong>Page Not Found</strong>
      </p>
      <p className="text-center text-muted">
        The page you are looking for might have been removed, renamed, or does not exist.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
    </>
  )
}

export default NotFound
