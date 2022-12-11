import React from "react"


function Footer() {
    return <footer className="page-footer green lighten-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">ТУТ ТОЖЕ НИЧЕГО</a>
      </div>
    </div>
  </footer>
}

export {Footer}