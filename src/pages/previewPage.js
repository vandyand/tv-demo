import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import PropTypes from 'prop-types'
import '../App.css'

class PreviewPage extends Component {

    state = {
        name:'',
        rating:'',
        image:'',
    }

    showSelected = (show) => {}

    avgRating = () => {
        if (this.props.shows.length === 0){
            return 0
        }

        let summ = this.props.shows.reduce((acc,show)=>
            acc + parseInt(show.rating),0
        )
        let mean = summ / this.props.shows.length
        return mean
    }

    renderShows = () => {
        return this.props.shows.filter((show) => {
            return parseInt(show.rating) <= 4
        }).map((show,ind) => {
            return <TVShow key={ind} name={show.name} allowDelete={true} selectHandler={(e) => this.showSelected(e)} deleteHandler={this.showDeleted} />
        })
    }

    render() {
        return (
            <div className="preview-page">
                <div className="shows">
                    <h2>Shows</h2>
                    {this.avgRating()}
                    {this.renderShows()}
                </div>
                <div className="show-box">
                    <div className="preview-head">
                        <h2>{this.state.name}</h2>
                        <h3>{this.state.rating}</h3>
                    </div>
                    <h2>{this.state.image}</h2>
                    {/*<img src={require(this.state.selectedShow.imageUrl)} alt="" />*/}
                </div>
            </div>
        );
    }
}

PreviewPage.propTypes = {
    shows: PropTypes.array,
}

export default PreviewPage

