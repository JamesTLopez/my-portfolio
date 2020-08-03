import React from 'react'

import Chordify from '../../images/chordify.png'
import Frontend from '../../images/frontendLarge.png'
import Lyricly from '../../images/lyricly.png'
import OnlineWhite from '../../images/online.png'
import Server from '../../images/server.png'

const Home = () => {
    return (
        <div className="home-page">
            <section className="title">
                <header></header>
                
            </section>
                <section className="content">
                    <div className="project-content">
                        <div className="latest-works-title">
                            <p id="chapter">Projects</p>
                            <p id="chapter-content">Latest Works</p>
                        </div>
                        <div className="latest-works-content">
                            <div className="card-container">
                                <div className="card hov1">
                                    <div className="image-box">
                                        <img id="chordify" src={Chordify} alt="chordify" />
                                    </div>
                                    <div className="content-box">
                                        <p>Chordify</p>
                                        <div className="button-group">
                                            <section><button className="but1">Demo</button></section>
                                            <section><button className="but2">About</button></section>
                                            <section><button className="but3">Source Code</button></section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div className="card hov2">
                                <div className="image-box">
                                        <img id="lyricly" src={Lyricly} alt="lyricly" />
                                    </div>
                                    <div className="content-box">
                                        <p>Lyricly</p>
                                        <div className="button-group">
                                            <section><button className="but1">Demo</button></section>
                                            <section><button className="but2">About</button></section>
                                            <section><button className="but3">Source Code</button></section>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="card-container">
                                <div className="card hov3">
                                <div className="image-box">
                                        <img id="onlinewhite" src={OnlineWhite} alt="online whiteboard" />
                                    </div>
                                    <div className="content-box">
                                        <p>Whiteboard</p>
                                        <div className="button-group">
                                            <section><button className="but1">Demo</button></section>
                                            <section><button className="but2">About</button></section>
                                            <section><button className="but3">Source Code</button></section>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="toolkit-content">
                            <div className="toolkit-title">
                                <div className="toolkit-container">
                                    <p id="toolkit-h1">Toolkit</p>
                                    <p id="toolkit-h2">Technical Skills</p>
                                </div>
                            </div>
                            <div className="toolkit-works">
                                <div className="toolkit-container">
                                    <section >
                                        <div className="image-box">
                                            <img id="toolkit-images" src={Frontend} alt="Frontend"/>
                                        </div>
                                        <div className="content-box">
                                            <p>Frontend</p>
                                            <div id="list">
                                                Javascript<br/>
                                                Typescript<br/>
                                                HTML5<br/>
                                                CSS or SASS<br/>
                                            </div>
                                        </div>
                                    </section>

       
                                    <section>
                                        <div className="image-box">
                                            <img id="toolkit-images" src={Server} alt="Frontend"/>
                                        </div>
                                        <div className="content-box">
                                            <p>Libraries/Frameworks</p>
                                            <div id="list">
                                                React<br/>
                                                Bootstrap<br/>
                                                Node<br/>
                                                <br/>
                                            </div>
                                        </div>
                                      
                                    </section>
                                    <section>
                                        <p> Web Design tools</p>
                                        <ul>
                                            <li>Affinity Designer</li>
                                            <li>Affinity Photo</li>
                                            <li>Adobe XD</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                    </div>
                </section>
        </div>
    )
}

export default Home
