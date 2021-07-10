import React from 'react';
import ReactDOM from 'react-dom';
import Forks from './forks';

const cardStyle = {
    display: 'flex',
    flexFlow:'column',
    height: '100%',
    minHeight: '200px',
    width: '100%',
    backgroundColor: 'red',
    marginBottom:'4px',
    cursor:'pointer'
};


class GistCard extends React.Component {
    constructor(props) {
        super(props);
        const filekeys = Object.keys(this.props.gist.files)

        this.state={
            name:this.props.gist.files[filekeys[0]].filename,
            tags:this.props.gist.files[filekeys[0]].language
        };
    }

    openContent() {
        alert()
    }

    render() {
      return (
        <div style={cardStyle}>
            <div>
                {this.state.name}
                <Forks gistID={this.props.gist.id}></Forks>
            </div>
            <div>
                {this.state.tags}
            </div>
            <div onClick={this.openContent} role='button' tabIndex='0'>
                {this.props.gist.url}
            </div>
        </div>
      )
    }
}

export default GistCard;