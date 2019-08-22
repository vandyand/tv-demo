import React, { Component } from 'react'

export default class Manage extends Component {
    render() {
        return (
            <div>
                <section>
                    <aside>
                        <div>
                            <h2>Shows</h2>
                            <div className="show">
                                <button>Show 1</button>
                                <button>-</button>
                            </div>
                            <div className="show">
                                <button>Show 2</button>
                                <button>-</button>
                            </div>
                        </div>
                    </aside>
                    <main>
                        <div>
                            <div className="preview-head">
                                <h2>Show Name</h2>
                                <h3>Rating</h3>
                            </div>
                            <img src={ require('../../images/bobby.png') } />
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}


