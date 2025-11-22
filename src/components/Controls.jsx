import React from 'react';

const Controls = ({
    workStatus,
    effectiveStatus,
    onWorkToggle,
    onEffectiveToggle,
    workTime,
    effectiveTime
}) => {

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="controls-container">
            <div className="timer-display">
                <div className="main-timer">
                    <span className="label">Work Time</span>
                    <span className="time">{formatTime(workTime)}</span>
                </div>
                {workStatus === 'working' && (
                    <div className={`effective-timer ${effectiveStatus === 'active' ? 'active' : ''}`}>
                        <span className="label">Effective Time</span>
                        <span className="time">{formatTime(effectiveTime)}</span>
                    </div>
                )}
            </div>

            <div className="buttons-grid">
                <button
                    className={`control-btn work-btn ${workStatus === 'working' ? 'active' : ''}`}
                    onClick={onWorkToggle}
                    title={workStatus === 'working' ? "Finish Work Day" : "Start Work Day"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                </button>

                <button
                    className={`control-btn effective-btn ${effectiveStatus === 'active' ? 'active' : ''}`}
                    onClick={onEffectiveToggle}
                    disabled={workStatus !== 'working'}
                    title="Toggle Effective Time"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Controls;
