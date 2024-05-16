import React from 'react'
import "./FooterStyles.css"

function Footer() {
  return (
    <>
    <div className='lorem'></div>
<div className="footer-basic">
        <footer>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/about">About</a></li>
                <li className="list-inline-item"><a href="/service">Services</a></li>
                <li className="list-inline-item"><a href="/contact">Contact</a></li>
            </ul>
            <div className="last-row">
                    <div class="col-lg-12 col-sm-12 col-xs-12">
                        <p class="copyright">Copyright © 2023 <a href="https://shivanshuu.netlify.app/" target='blank'>Shivanshu Dwivedi</a>.</p>
                    </div>   
                    </div>             
        </footer>
        </div>
    </>
  )
}

export default Footer




