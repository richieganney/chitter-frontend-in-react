import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export class ViewPeep extends Component {
    state = {
        singlePeep: []
      }
    componentDidMount() {
        var url = "https://chitter-backend-api.herokuapp.com/peeps"
        axios.get(url)
        .then(res => this.setState({ singlePeep: res.data }))
      }
    render() {
        return (
            <div className="w3-card-4">

            <header className="w3-container w3-blue">
                <h3>{this.state.singlePeep.body}</h3>
            </header>

            <div className="w3-container">
            <p>{this.state.singlePeep.updated_at}</p>
            <p><Link to="/">back</Link></p>
            </div>
            </div>
        )
      }
}

export default ViewPeep;
