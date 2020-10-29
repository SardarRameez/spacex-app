import gql from "graphql-tag";

export const MissionLaunches=gql`
query LaunchesList{
    launches {
      mission_name
      launch_year
    }
  }
`