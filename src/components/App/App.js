import React from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends React.Component {

    // Notes: Changing state directly does not trigger a re-render
    // Example this.state.headerText = 'new state' does not trigger a re-render
    // To change state we have to use setState

    state = {
        headerText: 'This is a cool app!',
    };

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />      
            </div>
        );
    }
}

export default App