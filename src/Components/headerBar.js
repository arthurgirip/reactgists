import React from 'react';
import ReactDOM from 'react-dom';

const headerStyle = {
    width:'100%',
    backgroundColor: 'blue',
    position: 'sticky',
    top:'-0.5px'
};

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'tanerdogan'
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
        <div style={headerStyle}>
            <input 
                name="name"
                id="name"
                type="text"
                value={this.state.name}
                onChange={(e) => this.handleChange({ name: e.target.value })}
                onKeyPress={(e) => this.handleKeyPress(e)}
                required
            />

        </div>
      )
    }
}

export default HeaderBar;