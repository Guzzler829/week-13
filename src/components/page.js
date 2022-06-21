import React from 'react';
import LoginForm from './login-form';
import Navigation from './navigation';

export default class Page extends React.Component {
    render(){
        return (
            <div className='container'>
                <Navigation />
                <div className='login-container'>
                    <LoginForm />
                </div>
            </div>
            
        );
    }
}