import React from 'react'
import './RecipeImage.scss'

const RecipeImage = (props) => {
    return (
        <div className="RecipeImage">
            <div className="wrapper" style={{backgroundImage: `url(${props.urlImage})`}}>
                <div className="title">
                    {props.title}
                </div>
                <div className="info">
                    <span>4 Servicing</span>
                    <span>40 Minutes</span>
                    <span>Luice Fonci</span>
                </div>
            </div>
        </div>
    )
}

export default RecipeImage
