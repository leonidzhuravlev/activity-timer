import { useEffect } from 'react';

export const usePersistence = (
    workStatus,
    setWorkStatus,
    effectiveStatus,
    setEffectiveStatus,
    workTimer,
    effectiveTimer,
    setHistory
) => {
    // Load state from local storage on mount
    useEffect(() => {
        const savedHistory = localStorage.getItem('workHistory');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }

        const savedState = localStorage.getItem('timerState');
        if (savedState) {
            const {
                workStatus: savedWorkStatus,
                effectiveStatus: savedEffectiveStatus,
                workTime,
                effectiveTime,
                lastUpdated,
                workRunning,
                effectiveRunning
            } = JSON.parse(savedState);

            if (savedWorkStatus === 'working' || savedWorkStatus === 'paused') {
                const now = Date.now();
                const drift = workRunning ? (now - lastUpdated) : 0;

                setWorkStatus(savedWorkStatus);
                setEffectiveStatus(savedEffectiveStatus);

                workTimer.syncState(workTime + drift, workRunning);

                // If effective timer was running, it also drifted
                const effectiveDrift = effectiveRunning ? (now - lastUpdated) : 0;
                effectiveTimer.syncState(effectiveTime + effectiveDrift, effectiveRunning);
            }
        }
    }, []);

    // Save state to local storage whenever it changes
    useEffect(() => {
        const stateToSave = {
            workStatus,
            effectiveStatus,
            workTime: workTimer.elapsedTime,
            effectiveTime: effectiveTimer.elapsedTime,
            lastUpdated: Date.now(),
            workRunning: workTimer.isRunning,
            effectiveRunning: effectiveTimer.isRunning
        };
        localStorage.setItem('timerState', JSON.stringify(stateToSave));
    }, [workStatus, effectiveStatus, workTimer.elapsedTime, effectiveTimer.elapsedTime, workTimer.isRunning, effectiveTimer.isRunning]);

    const clearState = () => {
        localStorage.removeItem('timerState');
    };

    return { clearState };
};
