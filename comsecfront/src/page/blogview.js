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
        <div style={{margin: '1%'}}>
            {

                (localStorage.getItem("userType") === 'admin' || localStorage.getItem("userId") === ownerId) &&
                <div>
                    <button type="button" class="btn btn-warning" style={{marginRight:'5px', fontSize: '18px'}} onClick={editHandler}>Edit</button> 
                    <button type="button" class="btn btn-danger" style={{marginRight:'5px', fontSize: '18px'}} onClick={deleteHandler}>Delete</button> 
                    </div>
}           
            <br />
            <h4>header</h4>
            <h6>{`${title}`}</h6>
            <br />
            <h4>content</h4>
            <h6>{`${content}`}</h6>
            <br />
            <h4>Comment</h4>
            {
                commentdata.map(d => <CommentComponent msg={d.msg} ownerName={d.ownerName} id={d._id} />)
            }
            <br />
            <textarea style={{width: '70%', margin: 'auto'}} class="form-control" id="exampleFormControlTextarea1" rows="10" onChange={e => setComment(e.target.value)}></textarea>
            <br />
            <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={commentHandler}>Add Comment</button>
        </div>
    )
}
