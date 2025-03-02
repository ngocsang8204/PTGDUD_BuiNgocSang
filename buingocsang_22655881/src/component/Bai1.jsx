import React from 'react'
import './Bai1.css'
import logo from '../photos/chefify.png'
import avt from '../photos/avatar.png'
import notfound from '../photos/nothing.png'
import white from '../photos/chefifywhite.png'
export default function bai1() {
  return (
    <>
        <div className = "container">
            <div className="header">
                <div className="left-header">
                  <img src={logo} alt="" />
                  <input type="text" placeholder='cake'/>
                </div>
                <div className="right-header">
                  <div className="nav-item"><a href="">What to cook</a></div>
                  <div className="nav-item"><a href="">Recipes</a></div>
                  <div className="nav-item"><a href="">Ingredients</a></div>
                  <div className="nav-item"><a href="">Occations</a></div>
                  <div className="nav-item"><a href="">About Us</a></div>
                  <div><img src={avt} alt="" className='avt'/></div>
                </div>
            </div>
            <div className="menu">
                
            </div>
            <div className="content">
              <h2>Sorry, no results were found for cake</h2>
              <img src={notfound} alt="" />
              <p>We have all your Independence Day sweets covered</p>

            </div>
            <div className="footer">
              <div className="left-footer">
                <div className="up-left">
                  <h2>About us</h2>
                  <p>Welcome to our website</p>
                  <div>
                    <input type="text" placeholder='Enter your email'/>
                    <button>Send</button>
                  </div>
                </div>
                <div className="down-left">
                  <img src={white} alt="" />
                  <p>2023 Chefify Company</p>
                  <p>Terms of Service</p>
                </div>
              </div>
              <div className="right-footer">
                <div className="right-foot-left">

                </div>
                div.right-foot-
              </div>
            </div>
        </div>
    </>
  )
}
