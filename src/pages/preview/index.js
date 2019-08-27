import React, { Component } from 'react'
import TVShow from '../../components/tvShow'

export default class Manage extends Component {
    render() {
        return (
            <div>
                <section>
                    <TVShow name1="Game of Thrones" name2="Big Bang Theory" />
                    <main>
                        <div>
                            <div className="preview-head">
                                <h2>Show Name</h2>
                                <h3>Rating</h3>
                            </div>
                            <img src={ require('../../images/bobby.png')} alt="" />
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}


