import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';



class SignUp extends Component {
    constructor(){
        super();


        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }


    }
    render (){
        const { displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    >
                    </FormInput>
                    

                </form>
            </div>
        )
    }




}