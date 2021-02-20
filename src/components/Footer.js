import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="px-5 pt-10 pb-20 md:flex md:items-center md:justify-between">
        <div></div>

        <nav className="my-5">
          <ul className="md:flex">
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

        <div></div>
      </footer>
    </>
  )
}

export default Footer
