import React from 'react';
import ReactDOM from 'react-dom';
import GistCard from './gistCard';

const containerStyle = {
    height: '100%',
}

class CardsContainer extends React.Component {

    render() {
        return (
            <div style={containerStyle}>
                {
                this.props.gists?.map(gist => (
                    <GistCard gist={gist}/>
                ))}
            </div>
        )
    }
}

export default CardsContainer;