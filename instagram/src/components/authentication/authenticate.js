import React from 'react';

const authenticate = WrappedComponent =>
    class extends React.Component {
        render() {
            return (
                <WrappedComponent />
            )
        }    
    }


export default authenticate;