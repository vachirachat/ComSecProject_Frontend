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
            <div class="card" style={{width:'800px', margin:'auto', marginTop:'20px'}}>
                <div class="card-body row" style={{justifyContent:'space-between'}}>
                
                <h5 class="card-title" style={{marginLeft:'5%', marginTop: 'auto', marginBottom: 'auto', width: '50%', textAlign: 'left'}}>{`${props.header}`}</h5>
                <h5 class="card-title" style={{marginLeft:'5%', marginTop: 'auto', marginBottom: 'auto'}}>{`${props.ownerName}`}</h5>
                
                <div>
                 
                <button type="button" class="btn btn-warning" style={{marginRight:'5px', fontSize: '16px', fontWeight: 'bold'}} onClick={viewHandler}>View</button> 
                </div>
            </div>
            </div>
        </div>
    )
}
