import React from 'react';
import iglogo from './iglogo.png';
import styled, { css } from 'styled-components';

const LoginWrapper = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;

    form {
        display: flex;
        width: 350px;
        flex-direction: column;
        border: 1px solid #e6e6e6;
        border-radius: 1px;
        padding: 20px;
        margin-top: 200px;
        align-items: center;
    }

    input {
        border: none;
        width: 350px;
    }

    button {
        background-color: #3897f0;
        border: 1px solid #3897f0;
        border-radius: 4px;
        color: #fff;
        font-weight: 600;
        padding: 5px 20px;
        cursor: pointer;
        font-size: 1.4rem;
    }

    img {
        width: 175px;
        height: 50px;
        padding: 20px 0;
    }    
`

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
            <LoginWrapper>
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
            </LoginWrapper>
            
        )
    }
}

export default Login;