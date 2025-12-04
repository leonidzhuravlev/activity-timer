import { useState, useEffect } from 'react';
import { useTimer } from './hooks/useTimer';
import { usePersistence } from './hooks/usePersistence';
import Controls from './components/Controls';
import Summary from './components/Summary';
import History from './components/History';

export function Application() {
    const [workStatus, setWorkStatus] = useState('idle'); // idle, working, paused, finished
    const [effectiveStatus, setEffectiveStatus] = useState('idle'); // idle, active
    const [view, setView] = useState('tracker'); // tracker, history
    const [history, setHistory] = useState([]);

    const workTimer = useTimer();
    const effectiveTimer = useTimer();

    const { clearState } = usePersistence(
        workStatus,
        setWorkStatus,
        effectiveStatus,
        setEffectiveStatus,
        workTimer,
        effectiveTimer,
        setHistory
    );

    const handleWorkToggle = () => {
        if (workStatus === 'idle') {
            setWorkStatus('working');
            workTimer.start();
        } else if (workStatus === 'working') {
            setWorkStatus('paused');
            workTimer.stop();
            if (effectiveStatus === 'active') {
                effectiveTimer.stop();
            }
        } else if (workStatus === 'paused') {
            setWorkStatus('working');
            workTimer.start();
            if (effectiveStatus === 'active') {
                effectiveTimer.start();
            }
        }
    };

    const handleFinish = () => {
        setWorkStatus('finished');
        workTimer.stop();
        effectiveTimer.stop();
        setEffectiveStatus('idle'); // Reset effective status for next time, but keep timer value for summary
    };

    const handleEffectiveToggle = () => {
        if (effectiveStatus === 'idle') {
            setEffectiveStatus('active');
            effectiveTimer.start();
        } else {
            setEffectiveStatus('idle'); // Just mark as idle, don't reset timer
            effectiveTimer.stop();
        }
    };

    const handleRestart = () => {
        // Save current session to history
        const newSession = {
            date: new Date().toISOString(),
            workTime: workTimer.elapsedTime,
            effectiveTime: effectiveTimer.elapsedTime,
            efficiency: workTimer.elapsedTime > 0
                ? Math.round((effectiveTimer.elapsedTime / workTimer.elapsedTime) * 100)
                : 0
        };

        const updatedHistory = [newSession, ...history];
        setHistory(updatedHistory);
        localStorage.setItem('workHistory', JSON.stringify(updatedHistory));

        // Reset state
        setWorkStatus('idle');
        setEffectiveStatus('idle');
        workTimer.reset();
        effectiveTimer.reset();
        clearState();
    };

    return (
        <div className={`app-container ${workStatus === 'working' ? 'working-mode' : ''} ${effectiveStatus === 'active' ? 'effective-mode' : ''}`}>
            <h1>Effective Time Tracker</h1>

            {view === 'history' ? (
                <History history={history} onBack={() => setView('tracker')} />
            ) : (
                <>
                    <button className="view-history-btn" onClick={() => setView('history')}>
                        History
                    </button>

                    {workStatus !== 'finished' ? (
                        <Controls
                            workStatus={workStatus}
                            effectiveStatus={effectiveStatus}
                            onWorkToggle={handleWorkToggle}
                            onEffectiveToggle={handleEffectiveToggle}
                            onFinish={handleFinish}
                            workTime={workTimer.elapsedTime}
                            effectiveTime={effectiveTimer.elapsedTime}
                        />
                    ) : (
                        <Summary
                            workTime={workTimer.elapsedTime}
                            effectiveTime={effectiveTimer.elapsedTime}
                            onRestart={handleRestart}
                        />
                    )}
                </>
            )}
        </div>
    );
}
