import React, { Component } from 'react';
import ShowingItem from '../../../components/ShowingItem';
import {showings} from '../../../data';

export default class Home extends Component {
    render() {
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
