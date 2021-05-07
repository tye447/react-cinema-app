import React, { Component } from 'react';
import ShowingList from '../../components/ShowingList';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {showings: []};
    }
    componentDidMount(){
        fetch('/assets/data/showings.json')
        .then(res => {return res.json()})
        .then(data => {
            this.setState({showings: data});
        });
    }
    render() {
        return (
            <ShowingList showings={this.state.showings}></ShowingList>
        )
    }
}
