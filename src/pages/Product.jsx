import React from 'react'
import {Footer}from"./Footer";
import { useState, useEffect } from "react";
const images = [
   {
            img:"/chair1.png"
        },
        {
            img:"/chair2.png"
        },
        {
            img:"/chair3.png"
        },
        {
            img:"/chair1.png"
        },
         {
            img:"/chair3.png"
        },
         {
            img:"/chair5.png"
        },
         {
            img:"/chair2.png"
        },
        {
            img:"/chair5.png"
        }
];
export const Product = () => {

     const [startIdx, setStartIdx] = useState(0);
  const total = images.length;
  const imagesPerSlide = 6; // 2 rows x 3 images

  const handlePrev = () => {
    setStartIdx((prev) => (prev === 0 ? total - imagesPerSlide : prev - 3 < 0 ? 0 : prev - 3));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 3 >= total ? 0 : prev + 3));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => (prev + 3 >= total ? 0 : prev + 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  // Get 6 images for current slide, wrap around if needed
  const getDisplayImages = () => {
    let imgs = [];
    for (let i = 0; i < imagesPerSlide; i++) {
      imgs.push(images[(startIdx + i) % total]);
    }
    return imgs;
  };

  const displayImages = getDisplayImages();

  return (
    <>
    <div className='headproduct'>
        <p className='pro'>Product</p>
    </div>
    
    <div className='productbody'>
        <div className='pro-list'>
            <ul>
                <li>All</li>
                <li>Chair</li>
                <li>Sofa</li>
                <li>Table</li>
                <li>Bed</li>
                <li>Wardrobes</li>
            </ul>
        </div>
    <div className="line"></div>
    </div>
    <div className='chairs'>
            <h2>Chair</h2>
        <div className='pro-list'>
            <ul>
                <li>Wood</li>
                <li>Plastic</li>
                <li>office</li>
                <li>Swing</li>
                <li>Unique</li>
                
            </ul>
        </div>
        <div className='chairs-list'>
            <div className="mainchair">
                <div className='mainchairimg'>
                    <img src="chair1.png" alt="no imag"/>
                  </div>
                   <div className='text'>Comfort chair</div>
                
                </div>
            <div className="models">
                <div className="display">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handlePrev}>
            &#8592;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* First row */}
            <div style={{ display: "flex", gap: "20px" }}>
              {displayImages.slice(0, 3).map((img, idx) => (
                <div className="imgslide" key={idx}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 1}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div style={{ display: "flex", gap: "20px" }}>
              {displayImages.slice(3, 6).map((img, idx) => (
                <div className="imgslide" key={idx + 3}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 4}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="next">
            &#8594;
          </button>
        </div>
        {/* Dots navigation 
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "10px" }}>
          {Array.from({ length: Math.ceil(total / 3) }).map((_, idx) => (
            <span
              key={idx}
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: startIdx / 3 === idx ? "#333" : "#ccc",
                display: "inline-block",
                cursor: "pointer"
              }}
              onClick={() => setStartIdx(idx * 3)}
            />
          ))}

           </div>*/}
      </div>
                
            </div>
        </div>
        <div className="line"></div>
    </div>
    <div className='chairs'>
            <h2>Sofa</h2>
        <div className='pro-list'>
            <ul>
                <li>Wood</li>
                <li>Plastic</li>
                <li>leather</li>
                
                
            </ul>
        </div>
        <div className='chairs-list'>
            
            <div className="models">
             <div className="display">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handlePrev}>
            &#8592;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* First row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(0, 3).map((img, idx) => (
                <div className="imgslide" key={idx}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 1}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(3, 6).map((img, idx) => (
                <div className="imgslide" key={idx + 3}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 4}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="next">
            &#8594;
          </button>
        </div>
      
      </div>
                
            </div>
            <div className="mainchair">
                <div className='mainchairimg'>
                    <img src="chair1.png" alt="no imag"/>
                  </div>
                   <div className='text'>Comfort chair</div>
                
                </div>
        </div>
        <div className="line"></div>
    </div>
    <div className='chairs'>
            <h2>Table</h2>
        <div className='pro-list'>
            <ul>
                <li>Dinning</li>
                <li>Study</li>
                <li>office</li>
                <li>Coffee</li>
                <li>Beside</li>
                
                
            </ul>
        </div>
        <div className='chairs-list'>
            <div className="mainchair">
                <div className='mainchairimg'>
                    <img src="chair1.png" alt="no imag"/>
                  </div>
                   <div className='text'>Comfort chair</div>
                
                </div>
            <div className="models">
               <div className="display">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handlePrev}>
            &#8592;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* First row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(0, 3).map((img, idx) => (
                <div className="imgslide" key={idx}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 1}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(3, 6).map((img, idx) => (
                <div className="imgslide" key={idx + 3}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 4}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="next">
            &#8594;
          </button>
        </div>
      
      </div>
                
            </div>
        </div>
        <div className="line"></div>
    </div>
    <div className='chairs'>
            <h2>Wardrobes</h2>
        <div className='pro-list'>
            <ul>
                <li>Wood</li>
                <li>Plastic</li>
                <li>Steel</li>
                
                
            </ul>
        </div>
        <div className='chairs-list'>
          
            <div className="models">
                 <div className="display">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handlePrev}>
            &#8592;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* First row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(0, 3).map((img, idx) => (
                <div className="imgslide" key={idx}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 1}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(3, 6).map((img, idx) => (
                <div className="imgslide" key={idx + 3}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 4}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="next">
            &#8594;
          </button>
        </div>
      
      </div>
                
            </div>
              <div className="mainchair">
                <div className='mainchairimg'>
                    <img src="chair1.png" alt="no imag"/>
                  </div>
                   <div className='text'>Comfort chair</div>
                
                </div>
        </div>
        <div className="line"></div>
    </div>
    <div className='chairs'>
            <h2>Bed</h2>
        <div className='pro-list'>
            <ul>
                <li>King</li>
                <li>Queen</li>
                <li>Kids</li>
                <li>Single</li>
                <li>Double</li>
                <li>Matters</li>
                
            </ul>
        </div>
        <div className='chairs-list'>
            <div className="mainchair">
                <div className='mainchairimg'>
                    <img src="chair1.png" alt="no imag"/>
                  </div>
                   <div className='text'>Comfort chair</div>
                
                </div>
            <div className="models">
                <div className="display">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handlePrev}>
            &#8592;
          </button>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* First row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(0, 3).map((img, idx) => (
                <div className="imgslide" key={idx}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 1}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
            {/* Second row */}
            <div style={{ display: "flex", gap: "10px" }}>
              {displayImages.slice(3, 6).map((img, idx) => (
                <div className="imgslide" key={idx + 3}>
                  <img
                    src={img.img}
                    alt={`Slide ${startIdx + idx + 4}`}
                    style={{ width: "290px", height: "300px", objectFit: "cover" }}
                  />
                  <p>comfort</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="next">
            &#8594;
          </button>
        </div>
      
      </div>
                
            </div>
        </div>
        <div className="line"></div>
    </div>
    <Footer/>
    </>
  )
}
