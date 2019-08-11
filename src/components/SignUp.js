import React, { Component } from 'react'
import axios from 'axios';

export default class SignUp extends Component {
        state = {
          username: '',
          password: ''
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
                'https://chitter-backend-api.herokuapp.com/users',
                {"user": {"handle":this.state.username, "password":this.state.password}}
            )
            .then(res => this.setState({ peeps: res.data }))
        }

    render() {
        return (
            <div className="container" align="center">
                <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
            <form >
              <label>
                username:
                <input autoComplete="on" onChange={this.handleUsernameChange} type="text" name="username" /><br></br><br></br>
                Password:
                <input autoComplete="on" onChange={this.handlePasswordChange} type="password" name="password" />
              </label><br></br>
              <button type="submit">Submit</button>
            </form><br></br><br></br>
            <p>By creating an account you agree to our Terms & Privacy</p>
          </div>
        )
    }
}
