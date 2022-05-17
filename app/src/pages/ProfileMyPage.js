import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import ProfileMyDetail from '../components/Details/ProfileMyDetail';
import { useAuth0 } from '@auth0/auth0-react'

export const GET_PROFILE_FROM_TOKENID = gql`
query GetProfileFromUserId($where: PersonWhere, $first: Int, $postsConnectionFirst2: Int) {
  people(where: $where) {
    name
    bio
    image
    id
    country
    interests {
      name
    }
    graduatedCoursesConnection {
      edges {
        year
        node {
          name
        }
      }
    }
    postsConnection(first: $first) {
      edges {
        date
        node {
          content
          creator {
            name
            image
            id
          }
        }
      }
    }
    postsAggregate {
      count
    }
    user {
      friendsAggregate {
        count
      }
      friends {
        postsConnection(first: $postsConnectionFirst2) {
          edges {
            date
            node {
              content
              creator {
                name
                image
              }
            }
          }
        }
      }
    }
  }
}
`;

const ProfileMyPage = () => {

  const { user } = useAuth0();

  const { loading, error, data, refetch } = useQuery(GET_PROFILE_FROM_TOKENID, {
    variables: {
      where: {
        user: {
          tokenId: user.sub
        }
      },
      first: 8,
      postsConnectionFirst2: 5
    },
  });

  refetch()

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.people?.map((profile) => (
          <ProfileMyDetail key={profile.id} profile={profile} />
        ))}
      </QueryResult>
    </Layout>
  )
}

export default ProfileMyPage