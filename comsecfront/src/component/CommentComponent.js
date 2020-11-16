import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
export default function CommentComponent(props) {
    const [newComment, setNewComment] = useState('')
    const [openedit, setOpenedit] = useState(false)
    const history = useHistory()

    // useEffect(() => {
    //     console.log('CommentComponent')
    //     console.log(props.ownerId)
    //     console.log(localStorage.getItem("userId") === props.ownerId)
    // }, [])
    const deleteHandler = () => {
        axios.delete('http://localhost:3000/comment/' + props.id, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
                res => {
                    alert('success to server')
                }
            ).then(
                history.push("/allblog")
            ).catch((err)=> {
                alert(err)
            })
    }

    const editHandler = () => {
        // console.log(localStorage.getItem("token"))
        // console.log(props.id)
        axios.patch('http://localhost:3000/comment/'+ props.id, {
                msg: newComment
            }, {headers: {Authorization: "bearer "+localStorage.getItem("token")}}).then(
                res => {
                    alert('success to save server')
                }
                
            ).then(
                history.push("/allblog")
            ).catch((err)=> {
                alert(err)
            })

    }

    return (
        <div>
            <div class="card" style={{width:'80%', margin:'auto', marginTop:'20px'}}>
                <div class="card-body row" style={{justifyContent:'space-between'}}>
                
                <h6 class="card-title" style={{marginLeft:'5%'}}>{`${props.msg}`}</h6>
                <h6 class="card-title" style={{marginLeft:'5%'}}>{`${props.ownerName}`}</h6>
                
                <div>
                 {(localStorage.getItem("userType") === 'admin' || localStorage.getItem("userId") === props.ownerId) &&
                     <div>
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={deleteHandler}>delete</button>
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={e => setOpenedit(true)}>edit</button>
                 </div>
                 }
                {
                    openedit && 
                    <div>
                    <input class="form-control" id="exampleFormControlInput1" placeholder="NewComment" style={{marginTop:'10px'}} onChange={e => setNewComment(e.target.value)}/>
                    <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={editHandler}>save</button>
                    </div>
                }
                
                </div>
            </div>
            </div>
        </div>
    )
}
