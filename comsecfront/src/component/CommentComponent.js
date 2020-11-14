import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
export default function CommentComponent(props) {
    const [newComment, setNewComment] = useState('')
    const [openedit, setOpenedit] = useState(false)
    const history = useHistory()
    const deleteHandler = () => {
        axios.delete('http://localhost:8000/comment/' + props.id, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
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
        axios.patch('http://localhost:8000/comment/'+ props.id, {
                msg: newComment
            }, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
                alert('success to save server')
                
            ).then(
                history.push("/allblog")
            )
            .catch( err =>
                alert('please try again')
            )

    }

    return (
        <div>
            <div class="card" style={{width:'70%', margin:'auto', marginTop:'20px'}}>
                <div class="card-body row" style={{justifyContent:'space-between'}}>
                
                <h1 class="card-title" style={{marginLeft:'5%'}}>{`${props.msg}`}</h1>
                <h1 class="card-title" style={{marginLeft:'5%'}}>{`${props.ownerName}`}</h1>
                
                <div>
                 
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={deleteHandler}><h5>delete</h5></button>
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={e => setOpenedit(true)}><h5>edit</h5></button>
                {
                    openedit && 
                    <div>
                    <input class="form-control" id="exampleFormControlInput1" placeholder="NewComment" style={{marginTop:'10px'}} onChange={e => setNewComment(e.target.value)}/>
                    <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={editHandler}><h5>save</h5></button>
                    </div>
                }
                
                </div>
            </div>
            </div>
        </div>
    )
}
