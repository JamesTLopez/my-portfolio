import React from 'react'

import Chordify from '../../images/chordify.png'
import Lyricly from '../../images/lyricly.png'
import OnlineWhite from '../../images/online.png'
import Frontend from '../../images/frontendLarge.png'
import Server from '../../images/server.png'
import Webtech from '../../images/webtech.png'

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
                            <p id="chapter">Toolkit</p>
                            <p id="chapter-content">Technologies</p>
                        </div>
                        <div className="current-toolkit-content">
                            <div className="toolkit-content">
                                <div className="card-container">
                                    <div className="card">
                                        <div className="image-box">
                                            <img id="Frontend" src={Frontend} alt="chordify" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="card">
                                        <div className="image-box">
                                            <img id="Frontend" src={Frontend} alt="chordify" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">
                                    <div className="card">
                                        <div className="image-box">
                                            <img id="Frontend" src={Frontend} alt="chordify" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

                                        // <div className="image-box">
                                        //     <img id="toolkit-images" src={Webtech} alt="Frontend"/>
                                        // </div>
                                        // <div className="content-box">
                                        //     <p> Web Design tools</p>
                                        //     <div id="list">
                                        //         Affinity Designer<br/>
                                        //         Affinity Photo<br/>
                                        //         Adobe XD<br/>
                                        //         <br/>
                                        //     </div>
                                        // </div>
export default Home
