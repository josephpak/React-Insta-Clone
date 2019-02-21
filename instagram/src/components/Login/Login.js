import React from 'react';
import iglogo from './iglogo.png';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = e => {
        e.preventDefault();
        localStorage.setItem("username", this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-panel">
                    <form onSubmit={this.login}>
                        <img src={iglogo} alt="logo"/>
                        <input 
                        type="text"
                        name="username"
                        onChange={this.handleInput}
                        placeholder="Username"
                        />
                        <input 
                        type="text"
                        name="password"
                        onChange={this.handleInput}
                        placeholder="Password"
                        />
                        <button>Login</button>
                    </form>  
                 </div>
            </div>
            
        )
    }
}

export default Login;