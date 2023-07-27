import React, { useState, useEffect } from "react";"

export default function Timer({ totalTime, onTimeOut }) {
    const [timeLeft, setTimeLeft] = useState(totalTime);

  // Use useEffect to update the timer
    useEffect(() => {
    // logic to update timer goes here
    }, [timeLeft]);

    return (
        <div>
        {/* Display time left */}
        </div>
    );
}