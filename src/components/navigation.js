import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'><button className="button nav-button">Manage</button></Link></li>
                    <li><Link to='/preview-page'><button className="button nav-button">Preview</button></Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation
