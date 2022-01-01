import React from 'react'
import './Ribon.scss'

const Ribon = () => {
    return (
        <div className="ribon">
            <div className="wrapper">
                <div className="image">
                    <div className="img" style={{backgroundImage: "url(/res/dish1.png)"}}></div>
                    <div className="img" style={{backgroundImage: "url(/res/dish2.png)"}}></div>
                    <div className="img" style={{backgroundImage: "url(/res/dish3.png)"}}></div>
                    <div className="img" style={{backgroundImage: "url(/res/dish4.png)"}}></div>
                    <div className="img" style={{backgroundImage: "url(/res/dish1.png)"}}></div>
                </div>
                <div className="follow">
                    <p>Follow me on<span>Instagram</span></p>
                </div>
            </div>
        </div>
    )
}

export default Ribon
