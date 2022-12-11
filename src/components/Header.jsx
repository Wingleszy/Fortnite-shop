import React from "react"

function Header() {
    return <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="google.com" className="brand-logo">React Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="!#">тут ничего нет</a></li>
        </ul>
      </div>
    </nav>
          
}

export {Header}