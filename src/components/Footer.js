import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          <h1>Reach out!</h1>
          <p>
            Let’s talk if you have an interesting idea for a new service, want help connecting better with your customers or want to increase your users. Great design can come a long way!
          </p>
        </span>
        <span>
          © Copyright {new Date().getFullYear()}. All rights reserved. Crafted in React by{' '}
          <a href="https://www.tacodenouter.com/">myself</a>, but I've relied on the excellent Gatsby starter by Australian digital company {' '} <a href="https://thriveweb.com.au">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
