import React from 'react'
import './Author.scss'

const Author = () => {
    return (
        <div className="userInfo">
            <div className="author">
                <div className="header">
                    <span>Author</span>
                    <div className="line"></div>
                </div>
                <div className="about">
                    <img src="/res/avatar.png" alt="" />
                    <div className="info">
                        <h3>Luice Fonci</h3>
                        <div className="desc">
                            lorem ipsum lorem ipsum dolor sit amet, con lorem lorem ipsum dolor sit
                        </div>
                    </div>
                </div>
            </div>
            <div className="follow">
                <div className="header">
                    <span>Subscribe & Follow</span>
                    <div className="line"></div>
                </div>
                <div className="chanel">
                    <div className="up">
                        <button>Follow me on Facebook</button>
                        <button>Follow me on Instagram</button>
                    </div>
                    <div className="down">
                        <button>Follow me on Twitter</button>
                        <button>Subscribe me on YouTube</button>
                    </div>
                </div>
            </div>
            <div className="ad">
                <span>Ad</span>
            </div>
            <div className="update">
                <h1>Get Lastest Updates</h1>
                <button className="btn-up">Email Address</button>
                <button className="btn-down">Subscribe</button>
            </div>
        </div>
    )
}

export default Author
