import { Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core'
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './index.css'

class ShowingItem extends Component {
    getFilmByTitle = () =>{
        fetch('/assets/data/films.json')
        .then(res => {return res.json()})
        .then(data => {
            this.setState({films: data.filter(c=>c.title === this.props.title)[0]});
            window.sessionStorage.setItem('currentFilm',JSON.stringify(this.state.films));
            this.props.history.push('film-info');
        });
    }
    render() {
        
        return (
            <Grid container onClick={this.getFilmByTitle}>
                <Card className="root">
                    <Grid item xs={4} sm={2} md={2}>
                        <CardMedia image={this.props.img} component="img" className="media"></CardMedia>
                    </Grid>
                    <Grid item xs={8} sm={10} md={10}>
                        <CardContent>
                            <Typography variant="h6" component="h2">{this.props.title}</Typography>
                            <Typography variant="body1" component="p">{this.props.address}</Typography>
                            <Typography variant="body1" component="p">{this.props.date}</Typography>
                            <Typography variant="body1" component="p">{this.props.time}</Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Grid>
        )
    }
}

export default withRouter(ShowingItem);