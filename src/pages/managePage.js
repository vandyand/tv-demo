import React, { Component } from 'react'
import TVShow from '../components/tvShow'

export default class Manage extends Component {

    tvShowSelected = () => {
        console.log("tvShowSelected function ran!")
    }

    tvShowDeleted = () => {
        console.log("tvShowDeleted function ran!")
    }

    saveTVShow = () => {
        console.log("saveTVShow clicked!")
    }

    render() {
        return (
            <div className="manage-page">>
                <TVShow name1="American Ninja Warrior" name2="Parks and Recreation" allowDelete={true}
                    selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} />
                <main className='manage-main'>
                    <div>
                        <h2>New/Edit Show</h2>
                        <div>
                            <p>Name:</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>Rating:</p>
                            <input type="text" />
                        </div>
                        <div>
                            <p>ImageUrl:</p>
                            <input type="text" />
                        </div>
                        <button onClick={this.saveTVShow}>Create/Update</button>
                    </div>
                </main>
            </div>
        )
    }
}
