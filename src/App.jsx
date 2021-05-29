import './App.css';
import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter} from 'react-router-dom';
import FilmDetail from './pages/FilmDetail';
import Tabs from './pages/Tabs';
import GroupDetail from './pages/GroupDetail';

class App extends Component {
	
	render() {
		return (
			<div>
				<div>
					<Switch>
						<Route path="/tabs" component={Tabs}></Route>
						<Route path="/film" component={FilmDetail}></Route>
						<Route path="/group" component={GroupDetail}></Route>
						<Redirect to="/tabs/home"></Redirect>
					</Switch>
				</div>
			</div>
		)
	}
}

export default withRouter(App)