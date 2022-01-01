import React from 'react'
import './Body.scss'
import Recipe from './popularRecipes/Recipe'
import Author from './author/Author'
import Dishes from './someDish/Dishes'
import LastestRecipes from './LastestRecipes/LastestRecipes'
import TrandingRecipes from './trandingRecipes/TrandingRecipes'

const Body = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <Recipe/>
                        <Dishes/>
                        <LastestRecipes/>
                    </div>
                    <div className="right">
                        <Author/>
                        <TrandingRecipes/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
