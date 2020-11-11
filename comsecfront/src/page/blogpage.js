import React from 'react'
import Cardblog from '../component/cardblog'
export default function blogpage() {

    const data = [{header:'google', id:'1'},{header:'google2', id:'2'},{header:'google3',id:'3'}]

    return (
        <div>
            {
                data.map(d => <Cardblog header={d.header} id={d.id}/>)
            }
            <Cardblog header="google" />
        </div>
    )
}
