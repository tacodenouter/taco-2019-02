import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted in React by{' '}
          <a href="https://www.tacodenouter.com/">myself</a>, yet built on a Gatsby Starter by Australian band called Thrive.
        </span>
      </div>
    </footer>
  </div>
)
