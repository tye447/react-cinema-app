import React, { Component } from 'react'

import { Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {HomeSharp, GroupSharp, ViewAgenda} from '@material-ui/icons';
import Agenda from './Agenda';
import Group from './Group';
import Home from './Home';
import Header from '../../components/Header';


class Tabs extends Component {
    handleCallToRouter = (url) => {
		this.props.history.push(url);
	}

    render() {
        return (
            <div>
                <Header></Header>
                <div>
                    <Switch>
                        <Route path="/tabs/home" component= {Home}></Route>
                        <Route path="/tabs/group" component={Group}></Route>
                        <Route path="/tabs/agenda" component={Agenda}></Route>
                        <Redirect to="/tabs/home"></Redirect>
                    </Switch>
                </div>
                <div style={{position:'sticky', bottom:0}}>
                    <BottomNavigation>
                        <BottomNavigationAction showLabel label="Home" icon={<HomeSharp />} onClick={this.handleCallToRouter.bind(this, '/tabs/home')}/>
                        <BottomNavigationAction showLabel label="Group" icon={<GroupSharp />} onClick={this.handleCallToRouter.bind(this, '/tabs/group')}/>
                        <BottomNavigationAction showLabel label="Agenda" icon={<ViewAgenda />} onClick={this.handleCallToRouter.bind(this, '/tabs/agenda')}/>
                    </BottomNavigation>
                </div>
            </div>
        )
    }
}

export default withRouter(Tabs)