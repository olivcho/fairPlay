import React from 'react'
import './LandingPage.css'

export function LandingPage() {
    return (
        <div className="landing-page">
            <div className="main-container">
                <img src="public/fairPlay_big_transparent.png"
                    alt="fairPlay"
                    className="fairPlay-logo"
                    width="350"
                    height="350"
                />
                <p className="subtitle"> <i>A statistically-fair automated basketball team generator</i></p>
                <button className="generate-team-button">Generate Team</button>
            </div>
            <div className="how-it-works-container">
                <h1>How it works</h1>
                <div className="how-it-works-steps">
                    <ol>
                        <li>Create a group and get a unique 6-digit room code</li>
                        <li>Log in using your room code</li>
                        <li>Input player names and emails</li>
                        <li>Players receive a ranking form via email</li>
                        <li>After 48 hours, our algorithm analyzes the data:
                            <ul>
                                <li>Creates skill charts for each player</li>
                                <li>Uses PCA analysis to group similar players</li>
                                <li>Generates balanced teams using K-means clustering</li>
                            </ul>
                        </li>
                        <li>Results are automatically sent to all players via email</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}