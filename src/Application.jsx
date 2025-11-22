import { useState, useEffect } from 'react';
import { useTimer } from './hooks/useTimer';
import Controls from './components/Controls';
import Summary from './components/Summary';
import History from './components/History';

export function Application() {
    const [workStatus, setWorkStatus] = useState('idle'); // idle, working, finished
    const [effectiveStatus, setEffectiveStatus] = useState('idle'); // idle, active
    const [view, setView] = useState('tracker'); // tracker, history
    const [history, setHistory] = useState([]);

    const workTimer = useTimer();
    const effectiveTimer = useTimer();

    useEffect(() => {
        const savedHistory = localStorage.getItem('workHistory');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    const handleWorkToggle = () => {
        if (workStatus === 'idle') {
            setWorkStatus('working');
            workTimer.start();
        } else if (workStatus === 'working') {
            setWorkStatus('finished');
            workTimer.stop();
            if (effectiveStatus === 'active') {
                setEffectiveStatus('idle');
                effectiveTimer.stop();
            }
        }
    };

    const handleEffectiveToggle = () => {
        if (effectiveStatus === 'idle') {
            setEffectiveStatus('active');
            effectiveTimer.start();
        } else {
            setEffectiveStatus('idle');
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
    };

    return (
        <div className={`app-container ${workStatus === 'working' ? 'working-mode' : ''}`}>
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
