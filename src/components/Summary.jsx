import React from 'react';

const Summary = ({ workTime, effectiveTime, onRestart }) => {
    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    const efficiency = workTime > 0 ? Math.round((effectiveTime / workTime) * 100) : 0;

    return (
        <div className="summary-container">
            <h2>Work Day Complete</h2>

            <div className="stats-grid">
                <div className="stat-card">
                    <span className="stat-label">Total Duration</span>
                    <span className="stat-value">{formatTime(workTime)}</span>
                </div>

                <div className="stat-card highlight">
                    <span className="stat-label">Effective Time</span>
                    <span className="stat-value">{formatTime(effectiveTime)}</span>
                </div>

                <div className="stat-card">
                    <span className="stat-label">Efficiency</span>
                    <span className="stat-value">{efficiency}%</span>
                </div>
            </div>

            <button className="restart-btn" onClick={onRestart}>
                Start New Day
            </button>
        </div>
    );
};

export default Summary;
