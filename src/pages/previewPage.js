import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import '../App.css'

export default class Manage extends Component {

    tvShowSelected = () => {
        console.log("tvShowSelected function ran!")
    }

    render() {
        return (
            <div className="preview-page">
                <TVShow name1="Game of Thrones" name2="Big Bang Theory" selectHandler={this.tvShowSelected} />
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


