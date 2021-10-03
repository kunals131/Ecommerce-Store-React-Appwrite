import React from 'react';

import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'
import { createUser, loginUser } from '../../appwrite/appwrite.utils';


import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email,password,confirmPassword} = this.state;

        if (password!==confirmPassword) {
            alert('passwords dont match')
            return;
        }
        try {
            const {displayName,email,password} = this.state;
            createUser(displayName,email,password).then(response=>{
                loginUser(email,password).then(response=>{
                    console.log(response);
                    console.log('created and logged');
                }, error=>{
                    console.log(error, "failed login")
                })
            }, error=>{
                console.log(error,"failed signup")
            })

        } catch(error){
            console.log(error);
        }
    }

    handleChange = event=>{
        const {name,value} = event.target;

        this.setState({[name]:value});

    }

    render() {
        const {displayName, email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2>I do not have a account!</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                    type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange={this.handleChange}
                    label = 'Display Name'
                    required
                />
                <FormInput
                    type = 'email'
                    name = 'email'
                    value = {email}
                    onChange={this.handleChange}
                    label = 'Email'
                />
                <FormInput
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange={this.handleChange}
                    label = 'Password'
                />
                <FormInput
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange={this.handleChange}
                    label = 'Confirm Password'
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
