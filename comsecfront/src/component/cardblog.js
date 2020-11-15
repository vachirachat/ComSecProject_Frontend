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
                
                <h3 class="card-title" style={{marginLeft:'5%'}}>{`${props.header}`}</h3>
                <h3 class="card-title" style={{marginLeft:'5%'}}>{`${props.ownerName}`}</h3>
                
                <div>
                 
                <button type="button" class="btn btn-warning" style={{marginRight:'5px', fontSize: '18px', fontWeight: 'bold'}} onClick={viewHandler}>View</button> 
                </div>
            </div>
            </div>
        </div>
    )
}
