import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import InterestDetail from '../components/Details/InterestDetail';
import { useParams } from "react-router-dom";

const INTEREST_QUERY = gql`
query GetInterestById($where: InterestWhere) {
  interests(where: $where) {
    name
    bio
    id
  }
}
`;

const InterestPage = () => {
    const params = useParams();
    const { loading, error, data } = useQuery(INTEREST_QUERY, {
        variables: {
            where: {
                id: params.interestId
            }
        },

    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
            {data?.interests?.map((interest) => (
                    <InterestDetail key={interest.id} interest={interest} />
                ))}
            </QueryResult>
        </Layout>
    )
}

export default InterestPage