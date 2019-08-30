import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {

    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return (
                <button className="delete-button" onClick={this.props.deleteHandler}>x</button>
            )
        }
    }

    render() {
        return (
            <div className="tvshow">
                <div className="show">
                    <button className="button show-button" onClick={this.props.selectHandler}>
                        {this.props.name}
                    </button>
                    {this.renderDelete()}
                </div>
            </div>
        )
    }
}

TVShow.propTypes = {
    name1: PropTypes.string,
    name2: PropTypes.string,
    allowDelete: PropTypes.bool,
    deleteHandler: PropTypes.func,
    selectHandler: PropTypes.func,
}

export default TVShow


