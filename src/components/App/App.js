import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

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
                <ResultsContainer />
            </div>
        );
    }
}

export default App;