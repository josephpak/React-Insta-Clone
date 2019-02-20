import React from 'react';

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
            <>
                <form onSubmit={this.login}>
                    <input 
                    type="text"
                    name="username"
                    onChange={this.handleInput}
                    />
                    <input 
                    type="text"
                    name="password"
                    onChange={this.handleInput}
                    />
                    <button>Login</button>
                </form>  
            </>
        )
    }
}

export default Login;