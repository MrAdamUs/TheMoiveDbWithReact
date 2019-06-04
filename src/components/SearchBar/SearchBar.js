import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    state = {
        term : ''
    }
    onFormsSubmit = (e) => {
        e.preventDefault();

        this.props.onFormsSubmit(this.state.term)
    }
    render() {
        return(
             <div className="searchBar">
                    <form onSubmit={this.onFormsSubmit} className="searchForm">
                            <input type="text"   onChange={(e) => this.setState({ term : e.target.value  })} value={this.state.term}  placeholder="Search for Movie" />
                    </form>
             </div>
        )
    }
}

export default SearchBar;