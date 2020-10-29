import React from 'react'
import { useLaunchesListQuery } from '../../generated/graphql'
import { MissionList } from './MissionList'

interface Props {
    callback:(newId:string)=>void
}
export const Mission:React.FC<Props> = ({callback}) => {
    const {data, error , loading}=useLaunchesListQuery()
    if(loading){
        return <h3>Loading ...</h3>
    }
    if(error || !data){
        return <h3>Data Not Found</h3>
    }
    return (
        <div>
            <MissionList data={data} callback={callback}></MissionList>
        </div>
    )
}
