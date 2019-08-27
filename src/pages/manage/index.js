import React, { Component } from 'react'
import TVShow from '../../components/tvShow'

export default class Manage extends Component {
    
    tvShowSelected = () => {
        console.log("tvShowSelected function ran!")
    }

    tvShowDeleted = () => {
        console.log("tvShowDeleted function ran!")
    }

    render() {
        return (
            <div>
                <section className='bodySection'>

                    <TVShow name1="American Ninja Warrior" name2="Parks and Recreation" allowDelete={true}
                            selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                    
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
