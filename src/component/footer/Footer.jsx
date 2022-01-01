import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div class="footer">
            <div className="wrapper">
                <div className="container">
                    <div className="about">
                        <div className="title">About</div>
                        <p  className="desc">lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, facilis.</p>
                    </div>
                    <div className="archives">
                        <div className="title">Archives</div>
                        <ul className="desc">
                            <li>Jun 2019</li>
                            <li>Jun 2018</li>
                            <li>Jun 2017-14</li>
                        </ul>
                    </div>
                    <div className="recipes">
                        <div className="title">Recipes</div>
                        <ul className="desc">
                            <li>Browse Recipes</li>
                            <li>Recipe Page</li>
                            <li>Submit Recipe</li>
                        </ul>
                    </div>
                    <div className="newSletter">
                        <div className="title">NewSletter</div>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum eum repellat id obcaecati!</p>
                    </div>
                </div>
                <div className="copyRight">
                    Copyright 2020 by ojjomedia. All rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
