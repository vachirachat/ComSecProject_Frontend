import React, { Component, useEffect, useState } from 'react'
import Cardblog from '../component/cardblog'
import userReducer from '../redux/userReducer'; 
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import './style.css'

const Blogpage = () => {
    const [fetch, setFetch] = useState(false)
    const [data2, setData2] = useState([])
    const [firsttime, setFirsttime]= useState(true)
    const state = useSelector(state => state)
    const data = [{header:'google', id:'1'},{header:'google2', id:'2'},{header:'google3',id:'3'}]
  
    // console.log(state)
    const getPost = () => {
        axios.get('http://localhost:3000/post', {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
            res => {
                // console.log('success')
                setData2(res.data)
            })
            // .catch((err)=> {
            //     alert(err)
            // })
    }
    useEffect(() => {
        getPost()
        
    }, [])
    
    return (
        <div style={{margin: "2%"}}>
            <a href="/createblog"><button className="btn-newpost">New Post</button></a>
            {
                data2.map(d => <Cardblog header={d.title} ownerName={d.ownerName} id={d._id} content={d.content} ownerId={d.ownerId}/>)
            }
        </div>
    )
}


export default Blogpage