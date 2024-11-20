import React from 'react';
import '../App.css';
import hr from '../assets/hr.png';
import iFont from '../assets/iFont.png';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
    userName: yup
        .string()
        .required("Enter your name"),
    email: yup
        .string()
        .email("Enter a valid email address")
        .max(1064)
        .required("Enter your email"),
    password: yup
        .string()
        .min(6, "Passwords must be at least 6 characters")
        .required("Enter your password"),
    rePassword: yup
        .string()
        .required('Type your password again')
        .oneOf([yup.ref('password')], 'Passwords must match')
});


const Signup = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-container'>

                <h1> Sign in </h1>

                <label> Email </label>
                <input
                    className={errors.email && 'alertInput'}
                    name="email"
                    type="text"
                    autoComplete="on"
                    ref={register} />
                {errors.email && <div className="alertText"> {errors.email.message} </div>}

                <label> Password </label>
                <input
                    type="password"
                    className={errors.rePassword && 'alertInput'}
                    name="rePassword"
                    autoComplete="off"
                    ref={register} />
                {errors.rePassword && <div className="alertText"> {errors.rePassword.message} </div>}


                <button type='submit'> Login </button>

                <p> By continuing, you agree to Amazon's

                <span className="sm-font"> Conditions of Use</span> and <span className='sm-font'> Privacy Notice. </span></p>

                <img src={hr} className="hr1" alt="horizontal line" />

             
            </div>
        </form>
    )
}
export default Signup;
