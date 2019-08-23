import React, { Component } from 'react'
import SideNav from '../../components/sideNav'

export default class Manage extends Component {
    render() {
        return (
            <div>
                <section className='bodySection'>
                    <SideNav thingy="What up dude!?" paragraph="This is a paragraph and in it there are lots of words. Word are great at communicating ideas. Who knew!?"/>
                    <aside className='showAside'>
                        <div className='asideDiv'>
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
                    <main className='sectionMain'>
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