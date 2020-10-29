import React from 'react'
import { useLaunchDetailQuery } from '../../generated/graphql'
import { MissionDetailsDisp } from './MissionDetailsDisp'

interface Props{
    id:string
}
export const MissionDetails:React.FC<Props> = ({id}) => {
    const {data , error , loading}=useLaunchDetailQuery({variables:{id:id}})
    if(loading){
        return <h3>Loading ...</h3>
    }
    if(error || !data){
        return <h3>Data Not Found</h3>
    }
    return (
        <div>
            <MissionDetailsDisp data={data}></MissionDetailsDisp>
        </div>
    )
}
