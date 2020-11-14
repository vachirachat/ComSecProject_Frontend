import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import CommentComponent from '../component/CommentComponent';

export default function Blogview(props) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [ownerId, setOwnerId] = useState('')
    const [comment, setComment] = useState('')
    const [commentdata, setCommentdata] = useState([])

    const {match} = props
    const {id} = match.params;

    const history = useHistory()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        axios.get('http://localhost:8000/post/'+id , {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
            res => {
                setTitle(res.data.title)
                setContent(res.data.content)
                setOwnerId(res.data.ownerId)
            }
        )
        axios.get('http://localhost:8000/comment/pid/'+id , {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
            res => {
                setCommentdata(res.data)
                console.log(commentdata)
            }
        )
        }
    const deleteHandler = () => {
            axios.delete('http://localhost:8000/post/' + id, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
                res => {
                    console.log('success')
                    console.log("bearer "+localStorage.getItem("token"))
                }
            ).then(
                history.push("/allblog")
            ).catch(
            )
        }
    const editHandler = () => {
        history.push("/blogedit/"+id)
    }

    const commentHandler = () => {
        axios.post('http://localhost:8000/comment', {
                pid: id,
                msg: comment
            }, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
                alert('success to save server')
                
            ).then(
                
            )
            .catch( err =>
                alert('please try again')
            )
    }


    return (
        <div>
            {

                (localStorage.getItem("userType") === 'admin' || localStorage.getItem("userId") === ownerId) &&
                <div>
                    <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={editHandler}><h5>Edit</h5></button> 
                    <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={deleteHandler}><h5>Delete</h5></button> 
                    </div>
}
            <h1>header</h1>
            <h3>{`${title}`}</h3>
            <h1>content</h1>
            <h3>{`${content}`}</h3>
            <h1>Comment</h1>
            {
                commentdata.map(d => <CommentComponent msg={d.msg} ownerName={d.ownerName} id={d._id} />)
            }
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" onChange={e => setComment(e.target.value)}></textarea>
            <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={commentHandler}><h5>Add Comment</h5></button>
        </div>
    )
}
