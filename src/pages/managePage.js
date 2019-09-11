import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import PropTypes from 'prop-types'
import '../App.css'

class ManagePage extends Component {

    state = {
        nameInProgress: '',
        ratingInProgress: '',
        imageInProgress: '',
    }

    showSelected = (stringFromChild) => {
        this.setState({
            inputShow: this.props.show
        });
    }

    showDeleted = () => {
        this.props.showDeleted();
    }

    saveShow = (show) => {
        this.props.saveShow(show);
        this.setState({
            nameInProgress: '',
            ratingInProgress: '',
            imageInProgress: '',
        })
    }

    renderShows = () => {
        // return this.props.shows.map((show,ind) => {
        //     return <TVShow key={ind} name={show.name} allowDelete={true} selectHandler={(e) => this.showSelected(e)} deleteHandler={this.showDeleted} />
        // })

        let shows = []
        for (let i = 0; i < this.props.shows.length; i++) {
            shows.push(<TVShow key={i} name={this.props.shows[i].name} allowDelete={true} selectHandler={(e) => this.showSelected(e)} deleteHandler={this.showDeleted} />)
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
                        <input className="button create-button" type="button" onClick={() => this.saveShow({
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