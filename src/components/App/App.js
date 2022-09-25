import React from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

class App extends React.Component {

    // Notes: Changing state directly does not trigger a re-render
    // Example this.state.headerText = 'new state' does not trigger a re-render
    // To change state we have to use setState

    constructor() {
        super();
        this.state = {
            headerText: 'Name It!',
            headerExpanded: true
        };
    }

    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !inputText});
    }

    render() {
        return (
            <div>
                <Header 
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
            </div>
        );
    }
}

export default App;