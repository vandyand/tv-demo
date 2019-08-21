import React, { Component } from 'react'

export default class Manage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <a href="manage.html">
                        Manage
                </a>
                    <a href="preview.html">
                        Preview
                </a>
                </nav>
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
                            <h2>New/Edit Show</h2>
                            <div className="new-edit">
                                <p>Name:</p>
                                <input type="text" />
                            </div>
                            <div className="new-edit">
                                <p>Rating:</p>
                                <input type="text" />
                            </div>
                            <div className="new-edit">
                                <p>ImageUrl:</p>
                                <input type="text" />
                            </div>
                            <button className="rect-button">Create/Update</button>
                        </div>
                    </main>
                </section>
            </div>
        )

    }
}