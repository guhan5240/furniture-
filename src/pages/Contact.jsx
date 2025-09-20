import React from 'react'
import { Footer } from './Footer'
import Register from './Register'

export const Contact = () => {
  return (
   <>
   
   <div className='abouthead'>
    <span className='abouttext'>Contact us</span>

            <div className='aboutimg'>
                <img src="dots.png" className='dots'/>
                <img src="Home-sofa.png"></img>
            </div>
    
    </div>
    <div className="contactinfo"></div>
   
   <div className="register">
    <Register/></div> 
    {/*

    <div className="register">
        <div className="fullname">
            <lable>Full Name*
                <input type='text'></input>
            </lable>
        </div>
         <div className="fullname">
            <lable>Full Name*
                <input type='text'></input>
            </lable>
        </div>
         <div className="Email">
            <lable>Email*
                <input type='text'></input>
            </lable>
        </div>
         <div className="Phoneno">
            <lable>Phone no*
                <input type='text'></input>
            </lable>
        </div>
         <div className="additional">
            <lable>Additional information*
                <input type='text-area'></input>
            </lable>
        </div>
        <button>Contact</button>
    </div>
    */}
    <div className="contactfooter">
                    <Footer/>
                    </div>
    </>
  )
}
