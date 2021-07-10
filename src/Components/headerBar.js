import React from 'react';
import ReactDOM from 'react-dom';

const CLASS_SEARCHBAR = 'searchbar';
const CLASS_TITLE = 'title';
const SEARCH_PLACEHOLDER = 'Search for a Git Username';
const CLASS_SEARCH_BUTTON = 'search-btn';

const headerStyle = {
    width: '100%'
};

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'alexwebr'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(changeObject) {
        this.setState(
            { name: changeObject.name }
        );
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            this.props.callFromParent(this.state.name)
        }
    }
    
    render() {
      return (
        <header style={headerStyle}>
            <div className={CLASS_TITLE}>
                <h1>Gists Listing App</h1>
                <p>Search a Git username and get the full list of public Gists for that user</p>
            </div>
            <div className={CLASS_SEARCHBAR}>
                <input
                    name="name"
                    id="name"
                    type="text"
                    value={this.state.name}
                    placeholder={SEARCH_PLACEHOLDER}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    onKeyPress={(e) => this.handleKeyPress(e)}
                    required
                />
                <a className={CLASS_SEARCH_BUTTON} onClick={()=>this.props.callFromParent(this.state.name) }>
                    <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>
                </a>
            </div>
        </header>
      )
    }
}

export default HeaderBar;