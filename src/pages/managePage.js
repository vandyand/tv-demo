import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import '../App.css'

export default class Manage extends Component {

    state = {
        input: {
            name: "",
            rating: "",
            imageUrl: "",
        },
        show: {
            name: "",
            rating: "",
            imageUrl: "",
        }

    }

    tvShowSelected = () => {
        this.setState({
            
        })
    }

    tvShowDeleted = () => {
        console.log("tvShowDeleted function ran!")
    }

    saveTVShow = () => {
        this.setState({
            show: {
                name:this.state.input.name,
                rating:this.state.input.rating,
                imageUrl:this.state.input.inputImageUrl,
            },
            input: {
                name:"",
                rating:"",
                imageUrl:"",
            }
        })
    }

    renderShows = () => {
        return (
            <TVShow name={this.state.show.name} allowDelete={true}
                selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
        )
    }

    render() {
        console.log(this.state)
        return (
            <div className="manage-page">
                <h2>Shows</h2>
                {this.renderShows()}
                <div className="main">
                    <h2>New/Edit Show</h2>
                    <form className="manage-form">
                        <label className="manage-page-form">Name:</label>
                        <input className="manage-page-form" type="text" value={this.state.input.name} onChange={(e) => { this.setState({ input:{name:e.target.value,
                                                                                                                                                     rating:this.state.input.rating,
                                                                                                                                                     imageUrl:this.state.input.imageUrl,} }) }} />
                        <label className="manage-page-form">Rating:</label>
                        <input className="manage-page-form" type="text" value={this.state.input.rating} onChange={(e) => { this.setState({ input:{name:this.state.input.name,
                                                                                                                                                     rating:e.target.value,
                                                                                                                                                     imageUrl:this.state.input.imageUrl,} }) }} />
                        <label className="manage-page-form">ImageUrl:</label>
                        <input className="manage-page-form" type="text" value={this.state.input.imageUrl} onChange={(e) => { this.setState({ input:{name:this.state.input.name,
                                                                                                                                                     rating:this.state.input.rating,
                                                                                                                                                     imageUrl:e.target.value,} }) }} />
                        <input className="button create-button" type="button" onClick={this.saveTVShow} value="Create/Update" />
                    </form>
                </div>
            </div>
        )
    }
}
