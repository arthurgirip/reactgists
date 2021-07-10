import React from 'react';
import ReactDOM from 'react-dom';
import CardsContainer from './cardsContainer';
import HeaderBar from './headerBar';
import axios from 'axios';

const dashboardStyle = {
    height: '100%',
    width: '100%'
};

class Dashboard extends React.Component {
    state = {
        username: 'tanerdogan',
        gists: []
    }

    getGistsByUsername = (username) => {
        axios.get(`https://api.github.com/users/${username}/gists`)
            .then(res => {
                const gists = res.data;
                console.log(gists);
                this.setState({gists: gists});
            })
            .catch(err => {
                this.setState({gists: []});
                console.log(err)
            })
    };

    searchName = (name) => {
        this.setState({username: name});
        this.getGistsByUsername(name)
    }

    componentDidMount() {
        this.getGistsByUsername(this.state.username)
    }

    render() {
      return (
        <div style={dashboardStyle}>
            <HeaderBar callFromParent = {this.searchName.bind(this)}/>
            <CardsContainer gists={this.state.gists} />
        </div>
      )
    }
}

export default Dashboard;