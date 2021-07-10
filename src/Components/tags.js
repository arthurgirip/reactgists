import React from 'react';
import ReactDOM from 'react-dom';
import GistCard from './gistCard';
import axios from 'axios';
const CLASS_TAGS = 'tags';

class Tags extends React.Component {
    constructor(props) {
        super(props);
    }

    getSpans() {
        const arrayFromMap = []
        this.props.tags.forEach((value,key) => arrayFromMap.push(
            <span className='tag'>
                <span style={{background: value, borderColor: value}}></span>
                {key}
            </span>
        ));
        return arrayFromMap;
    }

    render() {
        return (
            <div className={CLASS_TAGS}>
                {this.getSpans()}
            </div>
        )
    }
}

export default Tags;