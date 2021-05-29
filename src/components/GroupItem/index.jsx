import { Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core'
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {groups} from '../../data'
import './index.css'

class GroupItem extends Component {
    getGroupByName = () =>{
        const currentGroup = groups.filter(c=>c.name === this.props.name)[0];
        window.sessionStorage.setItem('currentGroup',JSON.stringify(currentGroup));
        this.props.history.push('/group');
    }
    render() {
        
        return (
            <Grid container onClick={this.getGroupByName}>
                <Card className="root">
                    <Grid item xs={3} sm={2} md={2} style={{'padding': '1rem'}}>
                        <CardMedia image={this.props.img} component="img" className="media"></CardMedia>
                    </Grid>
                    <Grid item xs={9} sm={10} md={10}>
                        <CardContent>
                            <Typography variant="h6" component="h2">{this.props.name}</Typography>
                            <Typography variant="body1" component="p">{this.props.members.length} Members</Typography>
                            <Typography variant="body1" component="p">{this.props.events.length} Events</Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Grid>
        )
    }
}

export default withRouter(GroupItem);