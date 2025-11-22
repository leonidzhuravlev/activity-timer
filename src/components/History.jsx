import React from 'react';

const History = ({ history, onBack }) => {
    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="history-container">
            <div className="history-header">
                <h2>History</h2>
                <button className="back-btn" onClick={onBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                    Back
                </button>
            </div>

            {history.length === 0 ? (
                <p className="no-history">No history available yet.</p>
            ) : (
                <div className="history-list">
                    {history.map((session, index) => (
                        <div key={index} className="history-item">
                            <div className="history-date">{formatDate(session.date)}</div>
                            <div className="history-stats">
                                <div className="history-stat">
                                    <span className="label">Work</span>
                                    <span className="value">{formatTime(session.workTime)}</span>
                                </div>
                                <div className="history-stat">
                                    <span className="label">Effective</span>
                                    <span className="value highlight">{formatTime(session.effectiveTime)}</span>
                                </div>
                                <div className="history-stat">
                                    <span className="label">Efficiency</span>
                                    <span className="value">{session.efficiency}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
