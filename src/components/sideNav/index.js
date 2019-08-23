import React, { Component } from 'react'

class SideNav extends Component {
    render() {
        return (
            <div>
                <div>{this.props.thingy}</div>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default SideNav


