import React from 'react'
import './Recipe.scss'

const Recipe = () => {
    return (
        <div className="recipe">
            <div className="header">
                <h1>Most Popular Recipes</h1>
                <div className="line"></div>
            </div>
            <div className="image">
                <div className="firstRow">
                    <div className="first">
                        <div className="content">
                            <span className="title">Tomatoes Stuffed with Foie and Chanterellws</span>
                            <div className="info">
                                <span>4 Servicing</span>
                                <span>40 Minutes</span>
                                <span>Luice Fonci</span>
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <div className="content">
                            <span className="title">Brain Power Blueberry Smoothie</span>
                            <div className="info">
                                <span>4 Servicing</span>
                                <span>40 Minutes</span>
                                <span>Luice Fonci</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="third">
                        <div className="content">
                            <span className="title">Slow Cooker Coconut Curry</span>
                            <div className="info">
                                <span>4 Servicing</span>
                                <span>40 Minutes</span>
                                <span>Luice Fonci</span>
                            </div>
                        </div>
                    </div>
                    <div className="fourth">
                        <div className="content">
                            <span className="title">Braised Pork Belly Adobo Sauce Curry</span>
                            <div className="info">
                                <span>4 Servicing</span>
                                <span>40 Minutes</span>
                                <span>Luice Fonci</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    )
}

export default Recipe
