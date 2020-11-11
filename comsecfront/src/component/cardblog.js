import React from 'react'

export default function cardblog(props) {
    return (
        <div>
            <div class="card" style={{width:'80%', margin:'auto', marginTop:'20px'}}>
                <div class="card-body row" style={{justifyContent:'space-between'}}>
                
                <h1 class="card-title" style={{marginLeft:'5%'}}>{`${props.header}`}</h1>
                <h1 class="card-title" style={{marginLeft:'5%'}}>{`${props.id}`}</h1>
                
                <div>
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}}><h5>Edit</h5></button> 
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}}><h5>Delete</h5></button> 
                <button type="button" class="btn btn-primary" style={{marginRight:'5px'}}><h5>View</h5></button> 
                </div>
            </div>
            </div>
        </div>
    )
}
