import { useState, useEffect, useRef } from 'react';

export const useTimer = (initialTime = 0, initialRunning = false) => {
    const [isRunning, setIsRunning] = useState(initialRunning);
    const [elapsedTime, setElapsedTime] = useState(initialTime);
    const startTimeRef = useRef(null);
    const accumulatedTimeRef = useRef(initialTime);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            // If we just started (or restored as running), we need to set the start time
            // If it's a restore, the logic in Application.jsx should have already adjusted accumulatedTimeRef
            // or we need to handle the "drift" there.
            // Here we just assume start() was called or initialRunning is true.
            
            if (!startTimeRef.current) {
                 startTimeRef.current = Date.now();
            }

            intervalId = setInterval(() => {
                const now = Date.now();
                const currentSessionTime = now - startTimeRef.current;
                setElapsedTime(accumulatedTimeRef.current + currentSessionTime);
            }, 100);
        } else {
            clearInterval(intervalId);
            startTimeRef.current = null;
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now();
        }
    };

    const stop = () => {
        if (isRunning) {
            setIsRunning(false);
            const now = Date.now();
            if (startTimeRef.current) {
                accumulatedTimeRef.current += now - startTimeRef.current;
            }
            setElapsedTime(accumulatedTimeRef.current);
            startTimeRef.current = null;
        }
    };

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
        accumulatedTimeRef.current = 0;
        startTimeRef.current = null;
    };

    // Helper to sync state from parent (e.g. after calculating drift)
    const syncState = (time, running) => {
        accumulatedTimeRef.current = time;
        setElapsedTime(time);
        setIsRunning(running);
        if (running) {
            startTimeRef.current = Date.now();
        } else {
            startTimeRef.current = null;
        }
    };

    return {
        isRunning,
        elapsedTime,
        start,
        stop,
        reset,
        syncState
    };
};
