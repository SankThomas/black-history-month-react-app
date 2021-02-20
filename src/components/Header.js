import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-5 2xl:px-20">
        <div>
          <NavLink to="/">
            <h2 className="text-2xl font-bold">
              <span className="bg-white text-black px-2 rounded-full">B</span>
              lack History
            </h2>
          </NavLink>
        </div>

        {isOpen && (
          <nav className="my-5">
            <ul>
              <li className="my-3 text-lg">
                <NavLink
                  to="/"
                  className="py-1 px-2 hover:text-black hover:bg-gray-100"
                >
                  Home
                </NavLink>
              </li>
              <li className="my-3 text-lg">
                <NavLink
                  to="/web-app"
                  className="py-1 px-2 hover:text-black hover:bg-gray-100"
                >
                  Web App
                </NavLink>
              </li>
              <li className="my-3 text-lg">
                <NavLink
                  to="/purpose-of-the-api"
                  className="py-1 px-2 hover:text-black hover:bg-gray-100"
                >
                  Purpose
                </NavLink>
              </li>
              <li className="my-3 text-lg">
                <a
                  href="https://black-history-month-api.herokuapp.com/people"
                  className="py-1 px-2 hover:text-black hover:bg-gray-100"
                >
                  View API
                </a>
              </li>
              <li className="my-3 text-lg">
                <NavLink
                  to="/documentation"
                  className="py-1 px-2 hover:text-black hover:bg-gray-100"
                >
                  Documentation
                </NavLink>
              </li>
              <li className="my-3 text-lg">
                <a
                  href="https://github.com/SankThomas/black-history-month-api.git"
                  className="py-1 px-2 hover:text-black hover:bg-gray-100"
                >
                  GitHub Repo
                </a>
              </li>
            </ul>
          </nav>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-5 top-5 2xl:right-20"
        >
          <FaBars className="text-2xl" />
        </button>
      </header>
    </>
  )
}

export default Header
