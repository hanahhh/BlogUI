import React from 'react'
import './Dishes.scss'

const Dishes = () => {
    return (
        <div className="dishes">
            <div className="wrapper">
                <div className="dish">
                    <img src="/res/m1.png" alt="" className="image"/>
                    <span className="text">Mexican Grilled Corn Recipe</span>
                </div>
                <div className="dish">
                    <img src="/res/m2.png" alt="" className="image"/>
                    <span className="text">Rost Chicken With Lemon Gray</span>
                </div>
                <div className="dish">
                    <img src="/res/m3.png" alt="" className="image"/>
                    <span className="text">Avocado Melon salad With Lime Vinagrette</span>
                </div>
                <div className="dish">
                    <img src="/res/m4.png" alt="" className="image"/>
                    <span className="text">Chunky Beef Slew</span>
                </div>
                <div className="dish">
                    <img src="/res/m5.png" alt="" className="image"/>
                    <span className="text">Farmhouse Vegetable And Barley Soup</span>
                </div>
            </div>
        </div>
    )
}

export default Dishes
