import React, { Component } from 'react'
import TVShow from '../components/tvShow'
import PropTypes from 'prop-types'
import '../App.css'

class PreviewPage extends Component {

    state = {
        selectedShow:{
            name:'default preview name',
            rating:'default preview rating',
            imageUrl:'default preview image',
        }
    }

    showSelected = () => {
        this.setState({
            selectedShow:{
                name:this.props.show.name,
                rating:this.props.show.rating,
                imageUrl:this.props.show.imageUrl,
            }
        })
    }

    renderShows = () => {
        return (
            <TVShow name={this.props.show.name} selectHandler={this.showSelected} />
        )
    }

    render() {
        return (
            <div className="preview-page">
                <h2>Shows</h2>
                {this.renderShows()}
                <div className="show-box">
                    <div className="preview-head">
                        <h2>{this.state.selectedShow.name}</h2>
                        <h3>{this.state.selectedShow.rating}</h3>
                    </div>
                    <h2>{this.state.selectedShow.imageUrl}</h2>
                    {/*<img src={require(this.state.selectedShow.imageUrl)} alt="" />*/}
                </div>
            </div>
        );
    }
}

PreviewPage.propTypes = {
    show: PropTypes.object,
}

export default PreviewPage

