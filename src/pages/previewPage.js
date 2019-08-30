import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import '../App.css'

export default class Manage extends Component {

    tvShowSelected = () => {
        console.log("tvShowSelected function ran!")
    }

    renderShows = () => {
        return(
            <TVShow name="Game of Thrones" selectHandler={this.tvShowSelected} />
        )
    }

    render() {
        return (
            <div className="preview-page">
                <h2>Shows</h2>
                {this.renderShows()}
                <div className="show-box">
                    <div className="preview-head">
                        <h2>Show Name</h2>
                        <h3>Rating</h3>
                    </div>
                    <img src={require('../images/bobby.png')} alt="" />
                </div>
            </div>
        );
    }
}


