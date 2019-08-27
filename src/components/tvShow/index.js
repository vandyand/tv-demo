import React, { Component } from 'react'

class TVShow extends Component {

    renderDelete = () => {
        if (this.props.allowDelete === true) {
            return (
                <button onClick={this.props.deleteHandler}>-</button>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Shows</h2>
                <div className="show">
                    <button onClick={this.props.selectHandler}>{this.props.name1}</button>
                    {this.renderDelete()}
                </div>
                <div className="show">
                    <button onClick={this.props.selectHandler}>{this.props.name2}</button>
                    {this.renderDelete()}
                </div>
            </div>
        )
    }
}

export default TVShow


