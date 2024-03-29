import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"
import { siteName } from "../config/menuConfig"
import { thisYear } from "../utils/thisYear"
import error404 from '../utils/error-404.svg'

function ErrorPage() {
  const date = thisYear()

  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <img className="mb-4 img-error" src={error404} alt='404 not found' />
                  <p className="lead">This requested URL was not found on this server.</p>
                  <Link to='/'><FaArrowLeft />Return</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutError_footer">
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright &copy; {siteName} {date}</div>
              <div>
                <a href="/">Privacy Policy</a>
                &middot;
                <a href="/">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ErrorPage