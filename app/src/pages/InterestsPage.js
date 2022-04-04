import React from 'react'
import { useQuery, gql } from '@apollo/client';
import InterestCard from '../containers/InterestCard';
import Layout from '../components/Layout';
import QueryResult from '../components/QueryResult';

const INTERESTS_QUERY = gql`
query Interests {
  interests {
    name
    bio
    id
  }
}
`;


const InterestsPage = () => {
    const { loading, error, data } = useQuery(INTERESTS_QUERY);

    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.interests?.map((interest) => (
                    <InterestCard key={interest.id} interest={interest} />
                ))}
            </QueryResult>
        </Layout>
    )
}

export default InterestsPage