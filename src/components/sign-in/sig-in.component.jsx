import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sig-in.styles.scss'

export default class SigIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>
                    Eu já tenho uma conta!
                </h2>
                <span>Entre com o seu email e senha</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Senha' required />
                    <CustomButton type='submit'>Entrar</CustomButton>
                </form>
            </div>
        )
    }
}
