import React from 'react';
import Interest from './Interest';
import { useQuery, gql } from '@apollo/client';

const INTEREST_QUERY = gql`
query Interests {
  interests {
    name
    bio
    id
  }
}
`;

const InterestList = () => {

    const { data } = useQuery(INTEREST_QUERY);

    return (
        <div>
          {data && (
            <>
              {data.interests.map((interest) => (
                <Interest key={interest.id} interest={interest} />
              ))}
            </>
          )}
        </div>
      );
    };

export default InterestList;