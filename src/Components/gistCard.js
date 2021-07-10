import React from 'react';
import ReactDOM from 'react-dom';
import Forks from './forks';
import '../Styles/gistCard.css'
import Tags from './tags';

const CLASS_FORKS = 'forks';
const CLASS_GISTITEM = 'gist-item';
const CLASS_LABEL = 'label';

class GistCard extends React.Component {
    constructor(props) {
        super(props);
        const filekeys = Object.keys(this.props.gist.files)

        this.state={
            name:this.props.gist.files[filekeys[0]].filename
        };
    }

    stringToColour(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }

    getTags() {
        const toReturn = new Map();
        for (const [key, value] of Object.entries(this.props.gist.files)) {
            if(null !== value.language){
                if(!toReturn.has(value.language)){
                    toReturn.set(value.language,this.stringToColour(value.language));
                }
            }
        }
        return toReturn;
    }

    render() {
      return (
        <div className={CLASS_GISTITEM}>
            <a href={this.props.gist.html_url} target='_blank'>{this.state.name}</a>
            <div className={CLASS_FORKS}>
                <span class={CLASS_LABEL}>Forks: </span>
                <Forks gistID={this.props.gist.id}></Forks>
            </div>
            <Tags tags={this.getTags()}/>
        </div>
      )
    }
}

export default GistCard;