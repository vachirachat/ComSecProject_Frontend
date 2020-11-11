import React, { Component } from 'react'
import Blogpage from './blogpage'
import Blogedit from './blogedit'
const Login = () => {

        return (
            <div>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" />

                <input type="password" class="form-control" placeholder="Password" aria-label="Password" />

                <button type="button" class="btn btn-primary"> sign in</button>
            
                <Blogpage />

                <Blogedit />
            </div>
        )
}

export default Login