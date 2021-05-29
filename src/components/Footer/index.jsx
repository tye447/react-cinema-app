import { BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import React, { Component } from 'react';
import {GroupSharp,HomeSharp,ViewAgenda} from '@material-ui/icons';
import './index.css'

export default class Footer extends Component {
    handleCallToRouter = (url) => {
        console.log(this.props)
		this.props.history.push(url);
	}
    render() {
        return (
            <BottomNavigation>
                <BottomNavigationAction label="Home" value="'/home'" icon={<HomeSharp />} onClick={this.handleCallToRouter.bind(this, '/home')}/>
                <BottomNavigationAction label="Group" value="'/group'" icon={<GroupSharp />} onClick={this.handleCallToRouter.bind(this, '/group')}/>
                <BottomNavigationAction label="Agenda" value="'/agenda'" icon={<ViewAgenda />} onClick={this.handleCallToRouter.bind(this, '/agenda')}/>
            </BottomNavigation>
        )
    }
}