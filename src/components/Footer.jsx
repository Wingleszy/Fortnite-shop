import React from "react"


function Footer() {
    return <footer className="page-footer green lighten-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/Wingleszy/Fortnite-shop" target="_blank" rel="noreferrer">Опять мой репозиторий :)</a>
      </div>
    </div>
  </footer>
}

export {Footer}