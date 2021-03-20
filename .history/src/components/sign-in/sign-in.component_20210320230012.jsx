import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';




class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required />

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <CustomButton type="submit"  >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;