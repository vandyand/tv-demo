import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import PropTypes from 'prop-types'
import '../App.css'

class ManagePage extends Component {

    state = {
        _idInProgress: '',
        nameInProgress: '',
        ratingInProgress: '',
        imageInProgress: '',
    }

    selectShow = (show) => {
        console.log('managePage showSelect ran!!',show)
        this.setState({
            _idInProgress: show._id,
            nameInProgress: show.name,
            ratingInProgress: show.rating,
            imageInProgress: show.image
        });
    }

    manageShow = (show) => {
        this.props.createOrUpdateShow(show);
        this.setState({
            _idInProgress: '',
            nameInProgress: '',
            ratingInProgress: '',
            imageInProgress: '',
        })
    }

    deleteShow = (show) => {
        this.props.deleteShow(show)
    }

    renderShows = () => {
        let shows = []
        for (let i = 0; i < this.props.shows.length; i++) {
            shows.push(
                <TVShow
                    key={i}
                    show={this.props.shows[i]}
                    allowDelete={true}
                    tvShowSelect={this.selectShow}
                    deleteShow={this.props.deleteShow}
                />
            )
        }
        return shows
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
                        <input className="manage-page-form" type="text" value={this.state.nameInProgress} onChange={(e) => {
                            this.setState({
                                nameInProgress: e.target.value
                            })
                        }} />
                        <label className="manage-page-form">Rating:</label>
                        <input className="manage-page-form" type="text" value={this.state.ratingInProgress} onChange={(e) => {
                            this.setState({
                                ratingInProgress: e.target.value
                            })
                        }} />
                        <label className="manage-page-form">ImageUrl:</label>
                        <input className="manage-page-form" type="text" value={this.state.imageInProgress} onChange={(e) => {
                            this.setState({
                                imageInProgress: e.target.value
                            })
                        }} />
                        <input className="button create-button" type="button" onClick={() => this.manageShow({
                            _id: this.state._idInProgress,
                            name: this.state.nameInProgress,
                            rating: this.state.ratingInProgress,
                            image: this.state.imageInProgress,
                        })} value="Create/Update" />
                    </form>
                </div>
            </div>
        )
    }
}


ManagePage.propTypes = {
    shows: PropTypes.array,
    showDelete: PropTypes.func,
    saveShow: PropTypes.func,
}


export default ManagePage