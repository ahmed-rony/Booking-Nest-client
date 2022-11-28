import React, { useContext, useState } from 'react';
import AuthContext from '../../utilities/ContextAPI/AuthContext';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { GiNestBirds } from 'react-icons/gi';
import "./Login.scss";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: null,
        password: null
    });
    const { loading, error, dispatch } = useContext(AuthContext);

    const [values, setValues] = useState({
        showPassword: false,
    });

    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:30000/api/auths/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/');
        } catch (error) {
            dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="login">
                <div className="container">
                    <Paper elevation={3} className="login-box">
                        <h3>Login For a Nest</h3>
                        <GiNestBirds className='icon' />
                        <TextField
                            className="form-field"
                            label="Username"
                            name='username'
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                type={values.showPassword ? 'text' : 'password'}
                                name="password"
                                onChange={handleChange}
                                className="form-field"
                                label="Password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword}>
                                            {values.showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {error && <span style={{ color: 'red' }}>{error.message}</span>}
                        <button disabled={loading} onClick={handleLogin} className="brand-btn login-btn">Login</button>
                    </Paper>
                </div>
            </div>
        </>
    );
};

export default Login;