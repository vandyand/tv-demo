import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import './pages.css'

export default class Manage extends Component {

    tvShowSelected = () => {
        console.log("tvShowSelected function ran!")
    }

    tvShowDeleted = () => {
        console.log("tvShowDeleted function ran!")
    }

    saveTVShow = () => {
        console.log("saveTVShow clicked!")
    }

    render() {
        return (
            <div className="manage-page">
                <div className="tv-show">
                    <TVShow name1="American Ninja Warrior" name2="Parks and Recreation" allowDelete={true}
                        selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                </div>
                <div className="main">
                    <h2>New/Edit Show</h2>
                    <div className="input-line">
                        <p>Name:</p>
                        <input type="text" />
                    </div>
                    <div className="input-line">
                        <p>Rating:</p>
                        <input type="text" />
                    </div>
                    <div className="input-line">
                        <p>ImageUrl:</p>
                        <input type="text" />
                    </div>
                    <button onClick={this.saveTVShow}>Create/Update</button>
                </div>
            </div>
        )
    }
}
