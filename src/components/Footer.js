import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          <h1>Get in touch</h1>
          <p>
            Let’s talk if you have an interesting idea for a new service, want help connecting better with your customers or want to increase your users. <a href="../../contact">Great design can come a long way!</a>
          </p>
        </span>
        <span>
          © Copyright {new Date().getFullYear()}. All rights reserved. Crafted in React by myself, but I've relied on {' '} <a href="https://github.com/thriveweb/yellowcake" target="_blank">this </a>excellent Gatsby starter.
        </span>
      </div>
    </footer>
  </div>
)
