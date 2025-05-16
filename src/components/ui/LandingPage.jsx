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
                        <li>Input player names and emails</li>
                        <li>Players receive a peer evaluation ranking form via email</li>
                        <li>After 48 hours, the form closes and our algorithm analyzes the data</li>
                        <li>Results are automatically sent to all players via email</li>
                    </ol>
                </div>
            </div>

            <div className="footer">
                <p>Made with ❤️ by <a href="https://www.linkedin.com/in/oliver-s-cho/" target="_blank" rel="noopener noreferrer">Oliver Cho</a></p>
            </div>
        </div>
    )
}