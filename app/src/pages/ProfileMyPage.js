import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import ProfileDetail from '../components/Details/ProfileDetail';
import { useAuth0 } from '@auth0/auth0-react'

const GET_PROFILE_FROM_TOKENID = gql`
query GetProfileFromUserId($where: PersonWhere) {
  people(where: $where) {
    name
    bio
    image
    id
    country
  }
}
`;

const ProfileMyPage = () => {
    const { user } = useAuth0();


    const { loading, error, data } = useQuery(GET_PROFILE_FROM_TOKENID, {
        variables: {
            where: {
                user: {
                    tokenId: user.sub
                }
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

export default ProfileMyPage