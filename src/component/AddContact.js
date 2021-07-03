import React, { Component } from 'react'

export class AddContact extends Component {
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>
                            Name
                        </label>
                        <input type="text" name="name" placeholder="Name"></input>
                        <label>
                            Name
                        </label>
                        <input type="email" name="email" placeholder="Email"></input>

                    </div>
                    <button className="ui button yellow">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact
