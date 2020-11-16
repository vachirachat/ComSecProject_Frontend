import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Newblogpage() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const history = useHistory()

    const sendData = () => {
        // console.log(localStorage.getItem("token"))
        if (title === '' || content === '') {
            alert('Please type anything in title or content')
        } else {
            axios.post('http://localhost:3000/post', {
                title: title,
                content: content
            }, {headers: {'Authorization': "bearer "+localStorage.getItem("token")}})
        .then(
            alert('post to server success')
        ).then(
            history.push("allblog")
        ).catch((err)=> {
            alert(err)
        })
        }
        
    }
    return (
        <div style={{margin: '2%'}}>
            <h2>New blog</h2>
             <div style={{width:'70%', margin:'auto'}}>
            <div>
            <h3 style={{float:'left'}}>Title</h3>
            <input class="form-control" id="exampleFormControlInput1" placeholder="header" style={{marginTop:'10px'}} onChange={e => setTitle(e.target.value)}/>
            </div>
            <br />
            <div>
            <h3 style={{float:'left'}}>Content</h3>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <button type="button" class="btn btn-warning" style={{marginRight:'5px', position:'absolute', right:'17%', marginTop:'10px', fontSize: '18px', fontWeight: 'bold'}} onClick={sendData}>Save</button> 
        </div>
        </div>
    )
}
