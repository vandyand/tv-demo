import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {

    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return (
                <button className="delete-button" onClick={()=>this.props.deleteShow(this.props.show)}>x</button>
            )
        }
    }

    render() {
        if (this.props.name !== "") {
            return (
                <div className="show">
                    <button className="button show-button" onClick={()=>this.props.tvShowSelect(this.props.show)}>{this.props.show.name}</button>
                    {this.renderDelete()}
                </div>
            )
        } else {
            return (<div></div>);
        }
    }
}

TVShow.propTypes = {
    name: PropTypes.string,
    allowDelete: PropTypes.bool,
    showId:PropTypes.number,
    deleteShow: PropTypes.func,
    selectShow: PropTypes.func,
}

export default TVShow


