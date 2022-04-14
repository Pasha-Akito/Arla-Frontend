import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import ProfileDetail from '../components/Details/ProfileMyDetail';
import { useParams } from "react-router-dom";

const GET_PROFILE_FROM_ID = gql`
query GetProfileFromProfileId($where: UserWhere) {
  users(where: $where) {
    profile {
      name
      bio
      image
      id
      country
    }
  }
}
`;

const ProfilePage = () => {
    const params = useParams();
    const { loading, error, data } = useQuery(GET_PROFILE_FROM_ID, {
        variables: {
            where: {
                profile: {
                    id: params.profileId
                }
            }
        },
    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.users?.profile?.map((profile) => (
                    <ProfileDetail key={profile.id} profile={profile} />
                ))}
            </QueryResult>
        </Layout>
    )
}

export default ProfilePage