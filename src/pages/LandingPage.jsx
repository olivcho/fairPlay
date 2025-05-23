import React from 'react'
import './LandingPage.css'
import './App.css'
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
            <div className="main-container">
                <img src="/fairPlay_big_transparent.png"
                    alt="fairPlay"
                    className="fairPlay-logo"
                    width="350"
                    height="350"
                />
                <p className="subtitle"> <i>A statistically-fair automated basketball team generator</i></p>
                <button
                    className="generate-team-button noSelect"
                    onClick={() => navigate('/team-generator')}
                >
                    Generate Team
                </button>
            </div>

            <div className="footer">
                <p>Made with ❤️ by <a href="https://www.linkedin.com/in/oliver-s-cho/" target="_blank" rel="noopener noreferrer">Oliver Cho</a></p>
            </div>
        </div>
    )
}