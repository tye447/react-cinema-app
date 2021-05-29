import { AppBar, IconButton, Toolbar, Typography,Card, CardContent, CardMedia, Grid} from '@material-ui/core';
import React, { Component } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './index.css'

export default class FilmDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {film: {}};
    }
	goBack=()=>{
        window.sessionStorage.removeItem('currentFilm');
		this.props.history.go(-1);
	}
    componentDidMount(){
        const currentFilm = JSON.parse(window.sessionStorage.getItem('currentFilm'));
        this.setState({film: currentFilm});
        
    }
    render() {
        return (
            <div>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.goBack}>
                            <ArrowBackIosIcon></ArrowBackIosIcon>
                        </IconButton>
                        <Typography variant="h6" className="root">
                          {this.state.film.title}
                      </Typography>
                    </Toolbar>
                </AppBar>
                <Card className="root">
                    <Grid item xs={11} sm={10} md={10}>
                        <CardContent>
							<Typography variant="h6" component="h2">{this.state.film.title}</Typography>
                            <CardMedia image={this.state.film.img} component="img" className="media"></CardMedia>
							<Typography variant="h6" component="p">Overview</Typography>
                            <Typography variant="body1" component="p">{this.state.film.overview}</Typography>
							<Typography variant="h6" component="p">Directors</Typography>
                            <Typography variant="body1" component="p">{this.state.film.directors}</Typography>
							<Typography variant="h6" component="p">Producer</Typography>
                            <Typography variant="body1" component="p">{this.state.film.producer}</Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </div>
        )
    }
}