import React from 'react'
import { Footer } from './Footer'

export const About = () => {
  return (
   <>
   
   <div className='abouthead'>
    <span className='abouttext'>About us</span>

            <div className='aboutimg'>
                <img src="dots.png" className='dots'/>
                <img src="Home-sofa.png"></img>
            </div>
    
    </div>
    
    <div className="wehelp aboutwehelp">
            <div className="fhelp">
                <img src="/chairlight.png" className="chairlight"></img>
                <img src="/greendots.png" className="greendots"></img>
                <img src="/sofaleafs.png"className="sofaleafs"></img>
                <img src="/whychoose.png"className="whychoose"></img>


            </div>
            <div className="help">
                <h1>We help you to make your house beautiful</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima  ratione provident dignissimos, In minima  ratione provident dignissimos, aliquid magnam quos aliquid magnam quos quibusdam sapiente aliquam doloremque harum sequi, minus alias est architecto officiis. Animi veniam exercitationem, incidunt, quaerat saepe amet laborum modi rerum cupiditate dolor excepturi.</p>
                <div className="flex-container">
                    <div className="hbox"><img src="/listdot.png"></img><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p></div>
                    <div className="hbox"><img src="/listdot.png"></img><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p></div>
                     <div className="hbox"><img src="/listdot.png"></img><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p></div>
                     <div className="hbox"><img src="/listdot.png"></img><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p></div>
    </div>
            <button className="btn">Explore now</button>
            </div>
        </div>
        <div className="whyChoose aboutwhychoose">
        
                    <div className="why">
                        <div className="why2">
                       <p><h1>Why Choose Us</h1>Lorem ipsum dolor sit amet,epudiandae  sit amet,epudiandae sit amet,epudiandaein sed ducimus odit? Inventore!
                       </p> </div>
                       <div className="boxes">
                        <div className="whybox">
                             <img src="truck.png"></img>
                             <span>Delivery</span>
                            <p>Lorem, ipsum dolor sit  adipisicing elit. Beatae, labore!</p>
        
                        </div>
                         <div className="whybox">
                                <img src="bag"></img>
                                <span>Easy to Shop</span>
                            <p>Lorem, ipsum dolor sit  adipisicing elit. Beatae, labore!</p>
                         </div>
                           </div>
                           <div className="boxes">
                        <div className="whybox">
                                 <img src="support.png"></img>
                                 <span>Support</span>
                            <p>Lorem, ipsum dolor sit adipisicing elit. Beatae, labore!</p>
                        </div>
                         <div className="whybox">
                                 <img src="arrows.png"></img>
                                 <span>Easy to Return</span>
                            <p>Lorem, ipsum dolorr adipisicing elit. Beatae, labore!</p>
                         </div>
                           </div>
                    </div>
                   
                     <div className="sofa-light">
                         <img src="yellowdots.png" className="yellow"></img>
                        <img src="whychoose.png" className="whychooseimg"></img></div>
                </div>
                <div className="aboutcustomersay">
                     <h1 className="says">what our customer says</h1>
                <div className="customersays">
                    <div className="customer-imgs">
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                        <img src="/customer.png"></img>
                    </div>
                    <div className="one-customer">
                        <div className="text"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque</p></div>
                        <div className="img"><img src="/customer.png"></img></div>
                        <div className="sentence"><p>Jerome prasana kumar</p></div>
                    </div>
                </div>
                </div>
                <div className="aboutfooter">
                <Footer/>
                </div>
                </>
  )
}
