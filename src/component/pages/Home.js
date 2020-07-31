import React from 'react'

import Chordify from '../../images/chordify.png'

const Home = () => {
    return (
        <div className="home-page">
            <section className="title">
            </section>
                <section className="content">
                    <div className="project-content">
                        <div className="latest-works-title">
                            <p id="chapter">Projects</p>
                            <p id="chapter-content">Latest Works</p>
                        </div>
                        <div className="latest-works-content">
                            <div className="card-container">
                                <div className="card">
                                    <div className="image-box">
                                        <img id="chordify" src={Chordify} alt="chordify" />
                                    </div>
                                    <div className="content-box">
                                        <p>Chordify</p>
                                        <div className="button-group">
                                            <section><button className="but">Demo</button></section>
                                            <section><button className="but">About</button></section>
                                            <section><button className="but">Source Code</button></section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-container">
                                <div className="card">

                                </div>
                            </div>
                            <div className="card-container">
                                <div className="card">

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
                                    <section>
                                        <p>Languages</p>
                                        <ul>
                                            <li>Javascript</li>
                                            <li>Typescript</li>
                                            <li>HTML5</li>
                                            <li>CSS or SASS</li>
                                        </ul>
                                    </section>
                                    <section>
                                        <p>Libraries or Frameworks</p>
                                        <ul>
                                            <li>React</li>
                                            <li>Bootstrap</li>
                                            <li>Node</li>
                                        </ul>
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
