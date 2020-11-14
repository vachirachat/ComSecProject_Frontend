import React, { Component, useEffect, useState } from 'react'
import { createStore } from 'redux'
import userReducer from '../redux/userReducer'; 
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(0)
    const [token, setToken] = useState('')

    const user = {
        username: username,
        password: password
    }

    const history = useHistory();
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    // const store = createStore(userReducer)
    const signinhandler = () => {
        axios.post('http://localhost:8000/auth/login', user).then(
            res => {
                console.log('success')
                setToken(res.data)
                dispatch({type:"setToken", token: res.data})
                localStorage.setItem('token', res.data)
                localStorage.setItem('username', username)
                getUserData()
                console.log(res)
                // localStorage.setItem('userType', )
                history.push("/allblog")
                
                setStatus(res.status)
            }
        ).catch(err =>
            alert('cant login')
        )
    }

    const getUserData = () => {
        axios.get('http://localhost:8000/user/me', {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
            res => {
                console.log('/user/me')
                console.log(res)
                localStorage.setItem('userId', res.data._id)
                localStorage.setItem('userType', res.data.role)
                console.log('usertype')
                console.log(localStorage.getItem('userType'))
            }
        )
    }

        return (
            <div>
                <p>{`${username}`}</p>
                <p>{`${password}`}</p>
                <p>{`${token}`}</p>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" onChange={e =>setUsername(e.target.value)}/>

                <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={e =>setPassword(e.target.value)}/>

                <button type="button" class="btn btn-primary" onClick={signinhandler}>sign in</button>
            </div>
        )
}

export default Login