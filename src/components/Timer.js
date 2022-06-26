import { useEffect, useState } from "react";

function Timer() {

    const [time, setTime] = useState("");

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            let now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds() + 1}`
            setTime(now);
        }, 1000);
    });
    return (
        <>
            <h2>{time}</h2>
        </>
    );
}

export default Timer;