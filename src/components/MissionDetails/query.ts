import gql from "graphql-tag";


export const MissionLaunchDetail=gql`
query LaunchDetail($id: String!) {
    launch(id: $id) {
      launch_year
      launch_success
      mission_name
      mission_id
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`