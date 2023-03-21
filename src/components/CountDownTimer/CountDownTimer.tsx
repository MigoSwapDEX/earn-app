import React, { useState, useCallback } from 'react'
import "./countdown.css"
// interface Props {
// }


const CountDownTimer: React.FC = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    // Set the date we're counting down to
    const countDownDate = new Date("Mar 27, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

        // Output the result in an element with id="demo"
        //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        //   if (distance < 0) {
        //     clearInterval(x);
        //     document.getElementById("demo").innerHTML = "EXPIRED";
        //   }
    }, 1000);
    return (
        <div className="discount-container">
            <h3 className='countdown-title'>Count Down to Presale</h3>
            <div className="countdown-timer">
                <div className="group">
                    <div className="value days">{days}</div>
                    <div className="unit">Days</div>
                </div>

                <div className="group">
                    <div className="value hours">{hours}</div>
                    <div className="unit">Hrs</div>
                </div>

                <div className="group">
                    <div className="value minutes">{minutes}</div>
                    <div className="unit">Min</div>
                </div>

                <div className="group">
                    <div className="value seconds">{seconds}</div>
                    <div className="unit">Sec</div>
                </div>
            </div>
        </div>
    )
}

export default CountDownTimer
