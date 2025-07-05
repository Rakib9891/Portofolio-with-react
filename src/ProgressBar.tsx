import { useEffect, useState } from "react";

type ProgressBarProps = {
    progress: number;
};

function ProgressBar({progress}: ProgressBarProps) {
    const [progressAnimation, setProgressAnimation] = useState(0)
    useEffect( () => {
        setTimeout( () => {
            setProgressAnimation(progress)
        }, 100)
    },[progress])
    let clr = 'red'
    if (progress == 10) {
        clr = 'orangered'
    }   
    else if (progress == 30){
        clr = 'orange'
    }
    else if (progress == 50){
        clr = 'gold'
    }
    else if (progress == 70){
        clr = 'yellowgreen'
    }
    else if (progress == 100){
        clr = 'green'
    }

    return (
        <div className="container">

            <div className="progress-bar">
                <div style={{
                    transform: `translateX(${progressAnimation - 100}%)`,
                    background: `${clr}`
                }} className="progress-bar-fill" 
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemax={100}
                aria-valuemin={0}
                >
                    {progressAnimation}%
                </div>
            </div>
                
        </div>
    );
}
export default ProgressBar;