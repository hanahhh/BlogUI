import React from 'react'
import './Feature.scss'

const Feature = () => {
    return (
        <div className="feature">
            <div className="wrapper">
                <div className="mainMenu">
                    <div className="content">
                        <div className="title">
                            <h1>Mexican Grilled </h1>
                            <h1>Corn Recipe</h1>
                        </div>
                        <div className="mealInfo">
                            <span>4 Servicing</span>
                            <span>40 Minute</span>
                            <span>Luice Fonci</span>
                        </div>
                        <div className="view">
                            <button>View Recipies</button>
                        </div>
                    </div>
                </div>
                <div className="favMenu"> 
                    <img src="/res/Rectangle_4.png" alt="" /> 
                    <img src="/res/Rectangle_5.png" alt="" /> 
                    <img src="/res/Rectangle_6.png" alt="" /> 
                    <img src="/res/Rectangle_7.png" alt="" /> 
                </div>
            </div>
        </div>
    )
}

export default Feature
