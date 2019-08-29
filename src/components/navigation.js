import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './components.css'

class Navigation extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul>
                    <li><Link to='/'>Manage</Link></li>
                    <li><Link to='/preview-page'>Preview</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation
