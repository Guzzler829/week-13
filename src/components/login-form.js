import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-box'>
                <h3>Log In</h3>
                <input id='user' type='text' placeholder='Username'></input>
                <input id='pass' type='password' placeholder='Password'></input>
            </div>
        );
    }
}