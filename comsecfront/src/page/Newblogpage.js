import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Newblogpage() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    const sendData = () => {
        console.log(localStorage.getItem("token"))
        axios.post('http://localhost:8000/post', {
                title: title,
                content: content
            }, {headers: {'Authorization': "bearer "+localStorage.getItem("token")}})
        .then(
            alert('post to server success')
        ).then(
            history.push("allblog")
        )
    }
    return (
        <div>
            <h1>New blog</h1>
             <div style={{width:'80%', margin:'auto'}}>
            <div>
            <h1 style={{float:'left'}}>Title</h1>
            <input class="form-control" id="exampleFormControlInput1" placeholder="header" style={{marginTop:'10px'}} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
            <h1 style={{float:'left'}}>Content</h1>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <button type="button" class="btn btn-primary" style={{marginRight:'5px', position:'absolute', right:'10%', marginTop:'10px'}} onClick={sendData}><h5>Save</h5></button> 
        </div>
        </div>
    )
}
