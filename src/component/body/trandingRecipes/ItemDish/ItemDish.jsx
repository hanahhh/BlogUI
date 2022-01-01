import React from 'react'
import './ItemDish.scss'

const ItemDish = (props) => {
    return (
        <div className="itemDish">
            <div className="wrapper">
                <div className="image" style={{backgroundImage: `url(${props.image})`}}></div>
                <div className="content">
                    <span className="title">{props.title}</span>
                    <span className="author">By Luice Fonci</span>
                </div>
            </div>
        </div>
    )
}

export default ItemDish
