import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        object: [] 
      }

    handlePasswordChange = event => {
        this.setState({password: event.target.value})
      }
    
    handleUsernameChange = event => {
        this.setState({username: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("look here")
        axios.post(
        'https://chitter-backend-api.herokuapp.com/sessions',
        {"user": {"handle":this.state.username, "password":this.state.password}}
    )
    .then(res => console.log(res.data.session_key))
    }

    render() {
        return (
            <div className="container" align="center">
                <h1>Login</h1>
                    <p>Please fill in this form to login.</p>
            <form >
              <label>
                username:
                <input onChange={this.handleUsernameChange} autoComplete="on" type="text" name="username" /><br></br><br></br>
                Password:
                <input onChange={this.handleUsernameChange} autoComplete="on" type="password" name="password" />
              </label><br></br>
              <button type="submit">Submit</button>
            </form><br></br><br></br>
            <p>You are seconds away from posting utterly pointless peeps...</p>
          </div>
        )
    }
}
