import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    // const username = 
    const state = useSelector(state => state)
    console.log('this is navbar')
    console.log(state)
    const history = useHistory();

    const logout = () => {
        window.localStorage.clear()
        // history.push("/home");
    }

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <a href="/allblog"><span class="navbar-brand mb-0 h1">My Blog.com</span></a>
                {localStorage.getItem("userId") !== undefined && 
                    <div><h6 style={{float:'right'}}>Name : {localStorage.getItem("username")}</h6>
                <a class="navbar-text" href="/login">
                    <button href="/login" type="button" class="btn btn-warning" onClick={logout}>logout</button>
                </a>
                </div>
}
            </nav>
        </div>
    )
}
