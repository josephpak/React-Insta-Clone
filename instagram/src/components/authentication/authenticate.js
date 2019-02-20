import React from 'react';

const authenticate = App => Login => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedOn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username')){
                this.setState({loggedOn: true})
            }     
        }

        render() {
            if (this.state.loggedOn) {
                return <App />
            }
            return <Login />
        }    
    }



export default authenticate;