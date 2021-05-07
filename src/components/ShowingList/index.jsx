import React, { Component } from 'react'
import ShowingItem from '../ShowingItem';

export default class ShowingList extends Component {
    render() {
        const {showings} = this.props;
        return (
            <div>
                {
                    showings.map( showings =>{
                        return <ShowingItem key={showings.id} {...showings}></ShowingItem>
                    })
                }
            </div>
        )
    }
}
