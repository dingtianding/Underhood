import React from 'react'
import LineGraph from './line_graph'

function News (){
    return (
        <div className="newsfeed">
            <div className="newsfeed_container">
                <div className="newsfeed_chartSection">
                <div className="newsfeed_portfolio">
                    <h1>Portfolio Value</h1>
                    <h1>$114,656</h1>
                    <p>+ 44,63 (+0.04%) Today</p>
                    <div className="newsfeed_chart">
                        <LineGraph  />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default News;