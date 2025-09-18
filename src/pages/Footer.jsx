import React from 'react'

export const Footer = () => {
  return (
    <>
    <div className='footer'>
            <div className="join">Join our Newsletter</div>

            <div className='input'>
                <div>
                <input type="text" placeholder='Enter your E-mail'></input>
                </div>
                <div >
                <input type="text " className="text2" id="white" placeholder='JOIN OUR NEWSLETTER'></input>
                </div>
            </div>

            <div className="collection">
                <div className="Fproduct">
                    <h1 className='heading'>Product</h1>
                    <p className='list'>Chair</p>
                     <p className='list'>Sofa</p>
                      <p className='list'>table</p>
                       <p className='list'>Bed</p>
                    
                </div>
                <div className="Fsupport">
                    <h1 className='heading'>Support</h1>
                    <p className='list'>Track my Orders</p>
                     <p className='list'>FAQs</p>
                      <p className='list'>Contacts</p>
                       
                </div>
                <div className="Fsocial">
                    <h1 className='heading'>Social</h1>
                    <p className='list'>Instagram</p>
                     <p className='list'>Facebook</p>
                      <p className='list'>X</p>
                       <p className='list'>Youtube</p>
                </div>
                <div className='terms'>
                <span>Terms & Condition
                    <div className="line2"></div>
                </span>
                
                <span>Privacy Policy
                     <div className="line2"></div>
                </span>
                <span>Cookies Policy
                     <div className="line2"></div></span></div>
            </div>

        <div className="ourstore">
            <h1 className='our-text'>Our Store</h1>
            <img src="/map.png"/>
        </div>
        <div className="chair5">
            <img src="/chair5.png"></img>
        </div>
        <div className='foot'>
        <div className="line"></div>
        <p>Copyright ©2025 All rights reserved. Developed by <b className='arrow'>Arrow Thought</b></p>
        <div className="line"></div>
        </div>
    </div>
    </>
  )
}
