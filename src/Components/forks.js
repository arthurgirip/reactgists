import React from 'react';
import ReactDOM from 'react-dom';
import GistCard from './gistCard';
import axios from 'axios';

const containerStyle = {
    height: '100%',
    display: 'flex'
}

class Forks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forks: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/gists/${this.props.gistID}/forks`)
            .then(res => {
                const forks = res.data;
                console.log(forks);
                this.setState({forks: forks});
            })
            .catch(err => {
                this.setState({forks: []});
                console.log(err)
            })
    }

    getForksString() {
        const toReturn = [];
        if(this.state.forks.length === 0){
            return '0';
        }
        this.state.forks.slice(0, 3).map(f => {
            toReturn.push(f.owner.login)
        });
        return toReturn.join(', ');
    }

    render() {
        return (
            <div style={containerStyle}>
                {this.getForksString()}
            </div>
        )
    }
}

export default Forks;