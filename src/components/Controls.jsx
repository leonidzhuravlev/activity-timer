import React from 'react';

const Controls = ({
    workStatus,
    effectiveStatus,
    onWorkToggle,
    onEffectiveToggle,
    onFinish,
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
                {(workStatus === 'working' || workStatus === 'paused') && (
                    <div className={`effective-timer ${effectiveStatus === 'active' ? 'active' : ''}`}>
                        <span className="label">Effective Time</span>
                        <span className="time">{formatTime(effectiveTime)}</span>
                    </div>
                )}
            </div>

            <div className="buttons-grid">
                <button
                    className={`control-btn work-btn ${workStatus === 'working' ? 'active' : ''} ${workStatus === 'paused' ? 'paused' : ''}`}
                    onClick={onWorkToggle}
                    title={workStatus === 'working' ? "Pause Work" : "Start/Resume Work"}
                >
                    {workStatus === 'working' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    )}
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

                {(workStatus === 'working' || workStatus === 'paused') && (
                    <button
                        className="control-btn finish-btn"
                        onClick={onFinish}
                        title="Finish Work Day"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Controls;
