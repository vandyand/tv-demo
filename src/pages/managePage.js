import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import '../App.css'

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
                <TVShow name1="American Ninja Warrior!!!!!!QQQQQQQ" name2="Parks and Recreation" allowDelete={true}
                    selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                <div className="main">
                    <h2>New/Edit Show</h2>
                    <form className="manage-form">
                        <label className="manage-page-form">Name:</label>
                        <input className="manage-page-form" type="text" />
                        <label className="manage-page-form">Rating:</label>
                        <input className="manage-page-form" type="text" />
                        <label className="manage-page-form">ImageUrl:</label>
                        <input className="manage-page-form" type="text" />
                        <input className="button create-button" type="button" onClick={this.saveTVShow} value="Create/Update" />
                    </form>
                </div>
            </div>
        )
    }
}
