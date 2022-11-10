import React from 'react'

function TimeLine() {
    return (
        <div className="timeline__container">
            <div className="timeline__buttons__container">
                <div className="timeline__button">1D</div>
                <div className="timeline__button">1W</div>
                <div className="timeline__button">1M</div>
                <div className="timeline__button">3M</div>
                <div className="timeline__button active">1Y</div>
                <div className="timeline__button">5Y</div>                                                                                
            </div>
        </div>
    )
}

export default TimeLine
