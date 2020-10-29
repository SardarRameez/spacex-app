import React from 'react'
import { LaunchesListQuery } from '../../generated/graphql'
import './style.css'

interface Props{
    data:LaunchesListQuery,
    callback:(newId:string)=>void
}

export const MissionList:React.FC<Props> = ({data , callback}) => {
    return (
        <div className="launches">
            <h3>Launches</h3>
            <ul className="launches_list">
                {data.launches && data.launches.map((launch , id)=>launch && (
                    <li key={id} className="launches_item" onClick={()=>{callback(String(id+1))}}>{launch?.mission_name} ({launch?.launch_year})</li>
                ))}
            </ul>
        </div>
    )
}
