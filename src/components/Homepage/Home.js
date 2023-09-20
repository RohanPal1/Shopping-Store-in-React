import React from 'react'
import './Home.css';

function Home() {
    return (
        <div>

            <div className='box'>

                <div className="rectangle" />

                <img className="line" alt="Line" src="/assets/line-23.png" />
                <img className="star" alt="Star" src="/assets/star-4.png" />

                <img className="background-rectangle" alt="Rectangle" src="/assets/rectangle-31.png" />


                <img className="big-star" alt="Star" src="/assets/star-3.png" />

                <div className="image">

                    {/* <img className="rectangle" alt="Rectangle" src="/assets/rectangle.png" /> */}
                    <img className="jessica" alt="Jessica" src="/assets/jessica.png"  />
                
                    
                </div>

            </div>

            <div className="label">
                <div className="oregon-jacket">OREGON JACKET</div>
                <div className="text-wrapper">$124</div>
            </div>

            <div className="card-img-overlay">
                <h1 className="card-title1">Fresh</h1>
                <h1 className='card-title2'>2022</h1>
                <h1 className='card-title3'>Look</h1>
            </div>
        </div>
        
    )
}

export default Home