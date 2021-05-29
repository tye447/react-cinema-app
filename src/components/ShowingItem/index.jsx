import { Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core'
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {films} from '../../data'
import './index.css'
import {getFilmById} from './../../services'

class ShowingItem extends Component {
    constructor(props) {
        super(props);
        this.state = {film: {}};
    }
    componentDidMount(){
        this.setState({film: getFilmById(this.props.fid)});
    }
    getFilmByTitle = () =>{
        const currentFilm = getFilmById(this.props.fid);
        window.sessionStorage.setItem('currentFilm',JSON.stringify(currentFilm));
        this.props.history.push('/film');
    }
    render() {
        
        return (
            <div>
                {
                    this.state.film &&
                        <Grid container onClick={this.getFilmByTitle}>
                            <Card className="root">
                                <Grid item xs={4} sm={2} md={2}>
                                    <CardMedia image={this.state.film.img} component="img" className="media"></CardMedia>
                                </Grid>
                                <Grid item xs={8} sm={10} md={10}>
                                    <CardContent>
                                        <Typography variant="h6" component="h2">{this.state.film.title}</Typography>
                                        <Typography variant="body1" component="p">{this.props.address}</Typography>
                                        <Typography variant="body1" component="p">{this.props.date}</Typography>
                                        <Typography variant="body1" component="p">{this.props.time}</Typography>
                                    </CardContent>
                                </Grid>
                            </Card>
                        </Grid>
                }
            </div>
        )
    }
}

export default withRouter(ShowingItem);