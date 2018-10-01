import React, {Component} from 'react';
import { runInThisContext } from 'vm';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'starting value'};
    }
    render() {
         return (
             <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} 
                />
                <br></br>
                Value of the input: {this.state.term}
            </div>
         ); 
    }
}

export default SearchBar;