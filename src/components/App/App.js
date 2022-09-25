import React from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {

    state = {
        headerText: 'This is a cool app!',
    }

    render() {
        return (
            <div>
                <Header />
                <h3>{this.state.headerText}</h3>
            </div>
        )
    }
}

export default App