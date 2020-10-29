import React from 'react'
import './style.css'
import { LaunchDetailQuery } from '../../generated/graphql'

interface Props {
    data:LaunchDetailQuery
}

export const MissionDetailsDisp:React.FC<Props> = ({data}) => {
    if(!data.launch){
        return <h3>Launch Unavailable</h3>
    }
    return (
        <div className="LaunchProfile">
            <div className="LaunchProfile_status">
                <span>Mission {data.launch.mission_id} : </span>
                {data.launch.launch_success ?
                (<span className="LaunchProfile__success">Success</span>):
                (<span className="LaunchProfile__failed">Failed</span>)}
            </div>
            <h1 className="LaunchProfile__title">
                {data.launch.mission_name}
                {data.launch.rocket && `(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type}) `}
            </h1>
            <p>{data.launch.details}</p>
            {data.launch.links && data.launch.links.flickr_images && (
                <div className="LaunchProfile__image-list">
                    {data.launch.links.flickr_images.map((img)=> img? <img src={img} key={img} alt="Mission_img" className="LaunchProfile__image"></img>:null)}
                </div>
            )}
        </div>
    )
}
