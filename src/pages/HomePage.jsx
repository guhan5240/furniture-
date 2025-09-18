import homeSofa from "../assets/Home-sofa.png"
import dots from "../assets/dots.png"
import chair1 from "../assets/chair1.png"
import chair2 from "../assets/chair2.png"
import chair3 from "../assets/chair3.png"
import whychoose from"../assets/whychoose.png"
import yellowdots from "../assets/yellowdots.png"
import bag from "../assets/bag.png"
import arrows from "../assets/arrows.png"
import truck from "../assets/truck.png"
import support from "../assets/support.png"
import { Footer } from "./Footer"
export const HomePage = () => {
  return (
    <>
    
        <div className="home-container">
    <div className="body-Content">
        <h1 className="homeTitle">
            Modern interior Design studio
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, asperiores soluta
            harum tempora quaerat,  laudantium consequatur animi, praesentium cupiditate.</p>
            <button>Explore now</button>
    </div>
    <div className="body-img">
        <img src={dots} className="dots" alt="dots"/>
        <img src={homeSofa} className="homesofa" alt="home sofa"></img>
    </div>
    </div>

    <div className="second">
        <div className="text-box">
            <h1>Crafted with excellent Material</h1>
            <p>Lorem ipsum dolor sit amet consectetur  dolores ipsum voluptate, deserunt voluptatem qui veritatis!</p>
            <button className="btn">Explore now</button>
        </div>
        <div className="box">
            <img src={chair1} alt="noimage" />
        <span>comfort chair</span> </div>
        <div className="box">
            <img src={chair2} alt="noimage" />
            <span>comfort chair</span> 
        </div>
        <div className="box">
            <img src={chair3} alt="noimage" />
            <span>comfort chair</span> 
        </div>
       

    </div>
     <div className="whyChoose">

            <div className="why">
                <div className="why2">
               <p><h1>Why Choose Us</h1>Lorem ipsum dolor sit amet,epudiandae  sit amet,epudiandae sit amet,epudiandaein sed ducimus odit? Inventore!
               </p> </div>
               <div className="boxes">
                <div className="whybox">
                     <img src={truck}></img>
                     <span>Delivery</span>
                    <p>Lorem, ipsum dolor sit  adipisicing elit. Beatae, labore!</p>

                </div>
                 <div className="whybox">
                        <img src={bag}></img>
                        <span>Easy to Shop</span>
                    <p>Lorem, ipsum dolor sit  adipisicing elit. Beatae, labore!</p>
                 </div>
                   </div>
                   <div className="boxes">
                <div className="whybox">
                         <img src={support}></img>
                         <span>Support</span>
                    <p>Lorem, ipsum dolor sit adipisicing elit. Beatae, labore!</p>
                </div>
                 <div className="whybox">
                         <img src={arrows}></img>
                         <span>Easy to Return</span>
                    <p>Lorem, ipsum dolorr adipisicing elit. Beatae, labore!</p>
                 </div>
                   </div>
            </div>
           
             <div className="sofa-light">
                 <img src={yellowdots} className="yellow"></img>
                <img src={whychoose} className="whychooseimg"></img></div>
        </div>

        <div className="wehelp">
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
        <div className="most-popular">
                <h1 className="pro-text">Most popular product</h1>
                <div className="products"></div>
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
        <Footer/>
    
    
    </>
  )
}
