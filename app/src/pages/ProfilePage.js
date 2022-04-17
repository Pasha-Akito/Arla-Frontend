import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import ProfileDetail from '../components/Details/ProfileDetail';
import { useParams } from "react-router-dom";

const GET_PROFILE_FROM_ID = gql`
query GetProfileFromProfileId($where: PersonWhere) {
  people(where: $where) {
    name
    bio
    image
    country
    id
    graduatedCoursesConnection {
      edges {
        year
        node {
          name
        }
      }
    }
    interests {
      name
    }
  }
}
`;

const ProfilePage = () => {
    const params = useParams();
    const { loading, error, data } = useQuery(GET_PROFILE_FROM_ID, {
        variables: {
            where: {
                id: params.profileId
            }
        },
    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.people?.map((profile) => (
                    <ProfileDetail key={profile.id} profile={profile} />
                ))}
            </QueryResult>
        </Layout>
    )
}

export default ProfilePage