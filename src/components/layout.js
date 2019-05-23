import React from "react"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"
import ToggleButton from "react-toggle-button"

function Layout({ location, title, children }) {
  const darkMode = useDarkMode(false)
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="flex-1 no-underline">
        <Link to={`/`}>{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h3 className="flex-1 no-underline">
        <Link to={`/`}>{title}</Link>
      </h3>
    )
  }
  return (
    <div className="font-sans w-5/6 sm:w-3/6 mx-auto flex flex-col content-between h-screen">
      <header className="font-bold text-2xl flex content-between content-center py-8 items-center">
        {header}
        <ToggleButton
          inactiveLabel="☀"
          activeLabel="☾"
          value={!darkMode.value}
          onToggle={darkMode.toggle}
        />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="text-center my-4">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
