import React from 'react'
import { Link } from 'react-router-dom'
const btnText = "Sign up for Free"
const title = "Shopping Anytime, Anywhere !!!"
const desc = "Take Shopcart on your device with our app and shop all time what you want. Just download and install and start Shopping"
import store1 from "../../assets/images/app/01.jpg"
import store2 from "../../assets/images/app/02.jpg"


const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <div className="container">
                <div className="section-header text-center">
                    <Link to={'/sign-up'} className='lab-btn mb-4'>{btnText}</Link>
                    <h2 className="title">{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <ul className="lab-ul">
                        <li><a href="#"><img src={store1} alt="" /></a></li>
                        <li><a href="#"><img src={store2} alt="" /></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AppSection
