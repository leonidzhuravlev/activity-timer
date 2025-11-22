import { useState, useEffect, useRef } from 'react';

export const useTimer = (initialState = false) => {
    const [isRunning, setIsRunning] = useState(initialState);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(null);
    const accumulatedTimeRef = useRef(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            startTimeRef.current = Date.now();
            intervalId = setInterval(() => {
                const now = Date.now();
                const currentSessionTime = now - startTimeRef.current;
                setElapsedTime(accumulatedTimeRef.current + currentSessionTime);
            }, 100); // Update every 100ms for smooth display if needed
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const stop = () => {
        if (isRunning) {
            setIsRunning(false);
            const now = Date.now();
            accumulatedTimeRef.current += now - startTimeRef.current;
            setElapsedTime(accumulatedTimeRef.current);
        }
    };

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
        accumulatedTimeRef.current = 0;
        startTimeRef.current = null;
    };

    return {
        isRunning,
        elapsedTime,
        start,
        stop,
        reset,
        setElapsedTime, // Exposed for manual setting if needed
    };
};
