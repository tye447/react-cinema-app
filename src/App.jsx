import './App.css';
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Home from './pages/Home';
import Group from './pages/Group';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {GroupSharp,HomeSharp,ViewAgenda} from '@material-ui/icons';
import Agenda from './pages/Agenda';
import FilmDetail from './components/FilmDetail';

class App extends Component {
	handleCallToRouter = (url) => {
		this.props.history.push(url);
	}

	render() {
		return (
			<div>
				<div>
					<Switch>
						<Route path="/home" component={Home}></Route>
						<Route path="/group" component={Group}></Route>
						<Route path="/agenda" component={Agenda}></Route>
						<Route path="/film-info" component={FilmDetail}></Route>
						<Redirect to="/home"></Redirect>
					</Switch>
				</div>
				<div>
					<BottomNavigation>
						<BottomNavigationAction label="Home" value="recents" icon={<HomeSharp />} onClick={this.handleCallToRouter.bind(this, '/home')}/>
						<BottomNavigationAction label="Group" value="favorites" icon={<GroupSharp />} onClick={this.handleCallToRouter.bind(this, '/group')}/>
						<BottomNavigationAction label="Agenda" value="nearby" icon={<ViewAgenda />} onClick={this.handleCallToRouter.bind(this, '/agenda')}/>
					</BottomNavigation>
				</div>
				
			</div>
		)
	}
}

export default withRouter(App)