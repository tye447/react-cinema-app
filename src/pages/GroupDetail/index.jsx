import { AppBar, IconButton, Toolbar, Typography,Card, CardContent, CardMedia, Grid} from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {getMemberById} from './../../services'

import './index.css'

 class GroupDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {group: {}};
    }
	goBack=()=>{
        this.props.history.go(-1);
	}
    componentDidMount(){
        const currentGroup = JSON.parse(window.sessionStorage.getItem('currentGroup'));
        this.setState({group: currentGroup});
    }
    componentWillUnmount(){
        window.sessionStorage.removeItem('currentGroup');
    }
    render() {
        return (
            <div>
                {
                    this.state.group && this.state.group.members &&
                        <AppBar position="sticky">
                            <Toolbar>
                                <IconButton color="inherit" onClick={this.goBack}>
                                    <ArrowBackIosIcon></ArrowBackIosIcon>
                                </IconButton>
                                <Typography variant="h6" className="root">
                                {this.state.group!==null && this.state.group.name}
                            </Typography>
                            </Toolbar>
                        </AppBar>
                }
                {
                    this.state.group && this.state.group.members &&
                        <Card className="root">
                        <Grid item xs={11} sm={10} md={10}>
                            <CardContent>
                                <Typography variant="h6" component="h2">{ this.state.group.name}</Typography>
                                <CardMedia image={this.state.group.img} component="img" className="media"></CardMedia>
                                <Typography variant="h6" component="p">{"Members"}</Typography>
                                {
                                    this.state.group.members.map(p=>{
                                        return <Typography key={p.id} variant="body1" component="p">{getMemberById(p.id).name}</Typography>
                                    }) 
                                }
                                <Typography variant="h6" component="p">Events</Typography>
                                { 
                                    this.state.group.members.map(e=>{
                                        return <Typography key={e.id} variant="body1" component="p">{e.id}</Typography>
                                    }) 
                                }
                            </CardContent>
                        </Grid>
                    </Card>
                }
                
            </div>
        )
    }
}
export default withRouter (GroupDetail)