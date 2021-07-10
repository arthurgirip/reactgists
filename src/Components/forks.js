import React from 'react';
import ReactDOM from 'react-dom';
import GistCard from './gistCard';
import axios from 'axios';

const containerStyle = {
    height: '100%',
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

    render() {
        return (
            <div style={containerStyle}>
                {this.state.forks.slice(0, 3).map(f => (
                    <div color='green'>
                        {f.owner.login}
                    </div>
                ))}
            </div>
        )
    }
}

export default Forks;