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
                <span class="navbar-brand mb-0 h1"><a href="/allblog">My Blog.com</a></span>
                {
                    localStorage.getItem("userId") !== undefined && 
                    <div>
                        <h6 style={{float:'right'}}>Name : {localStorage.getItem("username")}</h6>
                        <button type="button" class="btn btn-primary" onClick={logout}><a class="navbar-text" href="/login">logout</a></button>
                    </div>
                }
                
            </nav>
        </div>
    )
}
