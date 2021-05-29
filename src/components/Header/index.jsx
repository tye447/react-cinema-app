import { AppBar, Toolbar, Typography} from '@material-ui/core'
import React, { Component } from 'react';
import './index.css'

export default class Header extends Component {
    goBack=()=>{
		this.props.history.go(-1);
	}
    render() {
        
        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" className="root">
                        CineGo
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}