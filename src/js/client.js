import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>This is a initial project of React + ES6 + Webpack.</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Main></Main>,
    document.getElementById('app')
);