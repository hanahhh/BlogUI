import React from 'react'
import './LastestRecipes.scss'
import RecipeImage from './RecipeImage/RecipeImage'

const LastestRecipes = () => {
    return (
        <div className="lastestRecipe">
            <div className="titleName">
                <h1>Lastest Recipes</h1>
                <div className="line"></div>
            </div>
            <div className="list">
                <div className="row1">
                    <RecipeImage title="Lactose Free Homemade Cheese" urlImage="/res/dish1.png"/>
                    <RecipeImage title="Tiny Apple Pies with Cinnamon" urlImage="/res/dish2.png"/> 
                    <RecipeImage title="Meal Prep Breakfast For the Week" urlImage="/res/dish3.png"/>
                </div>
                <div className="row2">
                    <RecipeImage title="Giant Multi-Stuffed Soft Pretzel" urlImage="/res/dish4.png"/>
                    <RecipeImage title="Vegetarian Breakfast for You" urlImage="/res/dish1.png"/>
                    <RecipeImage title="5 Recipes Almost Too Cute To Eat" urlImage="/res/dish2.png"/>
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

export default LastestRecipes
