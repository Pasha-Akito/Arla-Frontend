import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import CourseDetail from '../components/Details/CourseDetail';
import { useAuth0 } from '@auth0/auth0-react'

export const COURSE_QUERY = gql`
query CourseFromTokenId($where: CourseWhere) {
  courses(where: $where) {
    name
    bio
    id
    peopleGraduated {
      name
      bio
      image
      id
      graduatedCoursesConnection {
        edges {
          year
        }
      }
    }
    peopleGraduatedAggregate {
      count
    }
  }
}
`;

const CoursePage = () => {

  const { user } = useAuth0();

  const { loading, error, data } = useQuery(COURSE_QUERY, {
    variables: {
      where: {
        peopleGraduated_SINGLE: {
          user: {
            tokenId: user.sub
          }
        }
      }
    },
    fetchPolicy: "network-only"
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.courses?.map((course) => (
          <CourseDetail key={course.id} course={course} />
        ))}
      </QueryResult>
    </Layout>
  )
}

export default CoursePage