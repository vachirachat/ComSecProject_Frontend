import React from 'react'

export default function blogedit() {
    return (
        <div style={{width:'80%', margin:'auto'}}>
            <div>
            <h1 style={{float:'left'}}>Header</h1>
            <input class="form-control" id="exampleFormControlInput1" placeholder="header" style={{marginTop:'10px'}}/>
            </div>
            <div>
            <h1 style={{float:'left'}}>Description</h1>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" class="btn btn-primary" style={{marginRight:'5px', position:'absolute', right:'10%', marginTop:'10px'}}><h5>Save</h5></button> 
        </div>
    )
}
