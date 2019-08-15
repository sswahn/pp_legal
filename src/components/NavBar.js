import React, { useEffect } from 'react'
import { config } from '../config'

function NavBar() {
  const setActive = () => {
    switch(window.location.pathname) {
      case config.routes.terms_us:
        document.getElementById('terms-us').classList.add('active')
        break
      case config.routes.terms_ca:
        document.getElementById('terms-ca').classList.add('active')
        break
      case config.routes.privacy_policy:
        document.getElementById('privacy-policy').classList.add('active')
        break
      case config.routes.contact:
        document.getElementById('contact').classList.add('active')
        break
    }
  }

  useEffect(() => {
    setActive()
  }, [])

  return (
    <nav>
      <div>
        <a id="terms-us" href={config.routes.terms_us}>Terms - US</a>
        <a id="terms-ca" href={config.routes.terms_ca}>Terms - Canada</a>
        <a id="privacy-policy" href={config.routes.privacy_policy}>Privacy Policy</a>
        <a id="contact" href={config.routes.contact}>Contact Us</a>
      </div>
    </nav>
  )
}

export default NavBar