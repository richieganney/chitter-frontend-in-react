import React, { Component } from 'react'
import axios from 'axios';

export default class SignUp extends Component {
    state = {
        username: '',
        password: ''
      }

  

    // componentDidMount() {
    //     axios.post("https://chitter-backend-api.herokuapp.com/users",
    //     { user }
    //     )
    //     .then(res => console.log(res.data))
    // }
    render() {
        return (
            <div className="container" align="center">
                <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
            <form >
              <label>
                username:
                <input type="text" name="username" /><br></br><br></br>
                Password:
                <input type="password" name="password" />
              </label><br></br>
              <button type="submit">Submit</button>
            </form><br></br><br></br>
            <p>By creating an account you agree to our Terms & Privacy</p>
          </div>
        )
    }
}
