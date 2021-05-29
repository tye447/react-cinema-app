import React, { Component } from 'react'
import GroupItem from '../../../components/GroupItem';
import {groups} from '../../../data';

export default class Group extends Component {
    render() {
        return (
            <div>
                { 
                    groups.map( groups =>{
                        return <GroupItem key={groups.id} {...groups}></GroupItem>
                    })
                }
            </div>
        )
    }
}
