import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Blogedit(props) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const history = useHistory()

    const {match} = props
    const {id} = match.params;

    const sendData = () => {
        if (title === '' || content === '') {
            alert('Please type anything in title or content')
        } else {
            axios.patch('http://localhost:3000/post/'+id, {
                title: title,
                content: content
            }, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
                alert('success to save server')
            ).then(
                history.push("/allblog"),
                window.location.reload(false)
            ).catch((err)=> {
                alert(err)
            })
        }

        
    }


    return (
        <div style={{width:'80%', margin:'auto', marginTop: '20px'}}>
            <div>
            <h3 style={{float:'left'}}>Title</h3>
            <input class="form-control" id="exampleFormControlInput1" placeholder="header" style={{marginTop:'10px'}} onChange={e => setTitle(e.target.value)}/>
            </div>
            <br />
            <div>
            <h3 style={{float:'left'}}>Content</h3>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" onChange={e => setContent(e.target.value)}></textarea>
            </div>
            <button type="button" class="btn btn-warning" style={{marginRight:'5px', position:'absolute', right:'10%', marginTop:'10px', fontSize: '18px', fontWeight: 'bold'}} onClick={sendData}>Save</button> 
        </div>
    )
}
