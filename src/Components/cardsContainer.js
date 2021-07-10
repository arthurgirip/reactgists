import React from 'react';
import ReactDOM from 'react-dom';
import GistCard from './gistCard';

const CLASS_LISTING = 'listing';

class CardsContainer extends React.Component {

    render() {
        return (
            <main>
                <div className={CLASS_LISTING}>
                {this.props.gists?.map(gist => (
                    <GistCard gist={gist}/>
                ))}
                </div>
            </main>
        )
    }
}

export default CardsContainer;