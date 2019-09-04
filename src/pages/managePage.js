import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import '../App.css'

export default class Manage extends Component {

    state = {
        inputName: "",
        inputRating: "",
        inputImageUrl: "",
        showName: "",
        showRating: "",
        showImageUrl: "",
    }

    tvShowSelected = (stringFromChild) => {
        console.log(stringFromChild);
        this.setState({
            inputName: this.state.showName,
            inputRating: this.state.showRating,
            inputImageUrl: this.state.showImageUrl,
        })
    }

    tvShowDeleted = () => {
        this.setState({
            showName: "",
            showRating: "",
            showImageUrl: "",
        })
    }

    saveTVShow = () => {
        this.setState({
            showName: this.state.inputName,
            showRating: this.state.inputRating,
            showImageUrl: this.state.inputImageUrl,

            inputName: "",
            inputRating: "",
            inputImageUrl: "",

        })
    }

    renderShows = () => {
        return (
            <TVShow name={this.state.showName} allowDelete={true}
                selectHandler={(e) => this.tvShowSelected(e)} deleteHandler={this.tvShowDeleted} />
        )
    }

    render() {
        console.log(this.state)
        return (
            <div className="manage-page">
                <div className="shows">
                    <h2>Shows</h2>
                    {this.renderShows()}
                </div>
                <div className="main">
                    <h2>New/Edit Show</h2>
                    <form className="manage-form">
                        <label className="manage-page-form">Name:</label>
                        <input className="manage-page-form" type="text" value={this.state.inputName} onChange={(e) => {
                            this.setState({
                                inputName: e.target.value
                            })
                        }} />
                        <label className="manage-page-form">Rating:</label>
                        <input className="manage-page-form" type="text" value={this.state.inputRating} onChange={(e) => {
                            this.setState({
                                inputRating: e.target.value
                            })
                        }} />
                        <label className="manage-page-form">ImageUrl:</label>
                        <input className="manage-page-form" type="text" value={this.state.inputImageUrl} onChange={(e) => {
                            this.setState({
                                inputImageUrl: e.target.value
                            })
                        }} />
                        <input className="button create-button" type="button" onClick={this.saveTVShow} value="Create/Update" />
                    </form>
                </div>
            </div>
        )
    }
}
