import React from 'react'
const subTitle = "Save the Day"
const title = (
    <h2 className='title'>Join on Day Long Free workshop for <b>Advanced<span> Mastering</span></b> on Sale.</h2>
)
const desc = 'Limited time offer! Hurry Up'

const Register = () => {
    return (
        <div className='register-section padding-tb pb-0'>
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-1 align-item-center">
                    <div className="col">
                        <div className="section-header">
                            <span className='subtitle'>{subTitle}</span>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section-wrapper">
                            <h4>Register Now</h4>
                            <form className="register-form">
                                <input type="text" name="name" placeholder='Username' className='reg-input' />
                                <input type="email" name="email" placeholder='Email' className='reg-input' />
                                <input type="number " name="number" placeholder='Number' className='reg-input' />
                                <button type='submit' className='lab-btn'>Register</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
