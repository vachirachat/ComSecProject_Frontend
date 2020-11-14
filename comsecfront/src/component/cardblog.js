import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Cardblog(props) {


    const history = useHistory()

    const viewHandler = () => {
        history.push("/blog/"+ props.id)
    }
    return (
        <div>
            <div class="card" style={{width:'80%', margin:'auto', marginTop:'20px'}}>
                <div class="card-body row" style={{justifyContent:'space-between'}}>
                
                <h1 class="card-title" style={{marginLeft:'5%'}}>{`${props.header}`}</h1>
                <h1 class="card-title" style={{marginLeft:'5%'}}>{`${props.ownerName}`}</h1>
                
                <div>
                 
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}} onClick={viewHandler}><h5>View</h5></button> 
                </div>
            </div>
            </div>
        </div>
    )
}
