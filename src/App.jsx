import React from 'react';
import Output from "./components/Output";
import Controller from "./components/Controller";
import './app.css'

const App = props => {
    return (
        <div className="container">
            <h1>ReactJS Sample text generator</h1>
            <hr />
            <Controller />
            <Output value={props.text} />
        </div>
    )
}

export default App