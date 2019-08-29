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
                <h2>Shows</h2>
                <div className="shows">
                    <div className="show">
                        <button className="button show-button" onClick={this.props.selectHandler}>
                            {this.props.name1}
                        </button>
                        {this.renderDelete()}
                    </div>
                    <div className="show">
                        <button className="button show-button" onClick={this.props.selectHandler}>
                            {this.props.name2}
                        </button>
                        {this.renderDelete()}
                    </div>
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


