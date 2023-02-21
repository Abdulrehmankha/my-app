// import Liabraries

import React from "react";
import ReactDOM from "react-dom";

// create react componnent

const App = () => {

    const buttonText = 'Click Me!';
    const HeadingText = 'Practice & Revision React JSX';

    function getTime(){
        return (new Date()).toLocaleTimeString()
    }

    return (
        <div>
            <center>
            <h1>{HeadingText}</h1>
            </center>
            <label className="label" htmlFor='name'></label>
            <input id="name" type='text'/>
            <button style={{backgroundColor: 'red', color: 'white'}}>{buttonText}</button>
            
            {/* First Problem Solved */}
            <h4>Current Time:</h4>
            <h3>{getTime()}</h3>
        </div>
    );
};

// take the component and show it to screen
ReactDOM.render(

    <App/>,
    document.querySelector('#root')
);