import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PeepItem extends Component {
    render() {
        return (
        <div className="w3-card-4">

            <header className="w3-container w3-blue">
                <h3>{this.props.peep.body}</h3>
            </header>

            <div className="w3-container">
            <p>{this.props.peep.updated_at}</p>
            <p><Link to="/">see more...</Link></p>
            </div>
            </div>
        )
    }
}

export default PeepItem
