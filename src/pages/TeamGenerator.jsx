import { useState, useRef } from 'react'
import './TeamGenerator.css'

export function TeamGenerator() {
    const [numPlayers, setNumPlayers] = useState('');
    const [numTeams, setNumTeams] = useState('');
    const [numSkillCategories, setNumSkillCategories] = useState('');
    const [playerNames, setPlayerNames] = useState([]);
    const [teamNames, setTeamNames] = useState([]);
    const [skillCategoryNames, setSkillCategoryNames] = useState([]);

    const playerInputRefs = useRef([]);
    const teamInputRefs = useRef([]);
    const skillInputRefs = useRef([]);

    const handleNumberInput = (value, maxValue, setter) => {
        const num = parseInt(value);
        if (isNaN(num)) {
            setter('');
            return;
        }
        if (num < 0) {
            setter(0);
            return;
        }
        if (num > maxValue) {
            setter(maxValue);
            return;
        }
        setter(num);
    };

    const handleArrayInput = (index, value, array, setter) => {
        const newArray = [...array];
        newArray[index] = value;
        setter(newArray);
    };

    const handleKeyDown = (e, currentIndex, refs, maxIndex) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextIndex = currentIndex + 1;
            if (nextIndex <= maxIndex) {
                refs.current[nextIndex]?.focus();
            }
        }
    };

    return (
        <div className="team-generator">
            <h1>Tell us about you!</h1>
            <div className="questions-container">
                <div className="top-inputs">
                    <input
                        className="question num-players noSelect"
                        type="number"
                        value={numPlayers}
                        onChange={(e) => handleNumberInput(e.target.value, 20, setNumPlayers)}
                        placeholder="Number of players..."
                        style={{
                            border: 'none',
                            borderBottom: '2px solid',
                        }}
                    />
                    <input
                        className="question num-teams noSelect"
                        type="number"
                        value={numTeams}
                        onChange={(e) => handleNumberInput(e.target.value, 4, setNumTeams)}
                        placeholder="Number of teams..."
                        style={{
                            border: 'none',
                            borderBottom: '2px solid',
                        }}
                    />
                    <input
                        className="question num-skill-categories noSelect"
                        type="number"
                        value={numSkillCategories}
                        onChange={(e) => handleNumberInput(e.target.value, 8, setNumSkillCategories)}
                        placeholder="Number of skill categories..."
                        style={{
                            border: 'none',
                            borderBottom: '2px solid',
                        }}
                    />
                </div>

                <div className="input-sections-container">
                    {numPlayers > 0 && (
                        <div className="input-section">
                            <h2>Player Names</h2>
                            {Array.from({ length: numPlayers }, (_, i) => (
                                <input
                                    key={`player-${i}`}
                                    ref={el => playerInputRefs.current[i] = el}
                                    className="margin-question player-name noSelect"
                                    type="text"
                                    value={playerNames[i] || ''}
                                    onChange={(e) => handleArrayInput(i, e.target.value, playerNames, setPlayerNames)}
                                    onKeyDown={(e) => handleKeyDown(e, i, playerInputRefs, numPlayers - 1)}
                                    placeholder={`Player ${i + 1} name...`}
                                    style={{
                                        border: 'none',
                                        borderBottom: '2px solid',
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {numTeams > 0 && (
                        <div className="input-section">
                            <h2>Team Names</h2>
                            {Array.from({ length: numTeams }, (_, i) => (
                                <input
                                    key={`team-${i}`}
                                    ref={el => teamInputRefs.current[i] = el}
                                    className="margin-question team-name noSelect"
                                    type="text"
                                    value={teamNames[i] || ''}
                                    onChange={(e) => handleArrayInput(i, e.target.value, teamNames, setTeamNames)}
                                    onKeyDown={(e) => handleKeyDown(e, i, teamInputRefs, numTeams - 1)}
                                    placeholder={`Team ${i + 1} name...`}
                                    style={{
                                        border: 'none',
                                        borderBottom: '2px solid',
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {numSkillCategories > 0 && (
                        <div className="input-section">
                            <h2>Skill Categories</h2>
                            {Array.from({ length: numSkillCategories }, (_, i) => (
                                <input
                                    key={`skill-${i}`}
                                    ref={el => skillInputRefs.current[i] = el}
                                    className="margin-question skill-category noSelect"
                                    type="text"
                                    value={skillCategoryNames[i] || ''}
                                    onChange={(e) => handleArrayInput(i, e.target.value, skillCategoryNames, setSkillCategoryNames)}
                                    onKeyDown={(e) => handleKeyDown(e, i, skillInputRefs, numSkillCategories - 1)}
                                    placeholder={`Skill category ${i + 1}...`}
                                    style={{
                                        border: 'none',
                                        borderBottom: '2px solid',
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}