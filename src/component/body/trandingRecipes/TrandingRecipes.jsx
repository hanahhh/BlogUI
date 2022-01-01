import React from 'react'
import './TrandingRecipes.scss'
import ItemDish from './ItemDish/ItemDish'

const TrandingRecipes = () => {
    return (
        <div className="tranding">
            <div className="titleName">
                <h3>Trending Recipes</h3>
                <div className="line"></div>
            </div>
            <ItemDish title="Gluten-Free Almond Cake with Berries" image="/res/dish1.png"/>
            <ItemDish title="Enjoy My Favorite Molten Chocolate Cake" image="/res/dish2.png"/>
            <ItemDish title="Perfect avocado toast for breakfast" image="/res/dish3.png"/>
            <ItemDish title="Pumpkin Kale Patties with Coconut Cilantro Rice" image="/res/dish4.png"/>
            <ItemDish title="The Healthiest Version of Yourself" image="/res/dish1.png"/>
        </div>
    )
}

export default TrandingRecipes
