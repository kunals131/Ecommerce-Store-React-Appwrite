import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { sdk } from '../../appwrite/appwrite.utils';
import { loginUser } from '../../appwrite/appwrite.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }



    handleSubmit = event=>{
        event.preventDefault();
        const {email,password} = this.state
        loginUser(email,password).then(response=>{
            console.log(response);
        }, error=>{
            console.log(error);
        }
        )
        this.setState({email : '', password: ''})
    }

    handleChange  = event=>{
        const{value,name} = event.target;

        this.setState({[name]:value})
        //this [] will dynamically set the values
    }

    render() {
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label = "Email" value = {this.state.email}
                        onChange = {this.handleChange} required
                        
                    />
                    <FormInput type="password" name="password" value = {this.state.password}
                     onChange = {this.handleChange} label="Password"
                     required />

                    <CustomButton type="submit">Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;