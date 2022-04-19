import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../containers/Layout';
import QueryResult from '../containers/QueryResult';
import CourseDetail from '../components/Details/CourseDetail';
import { useParams } from "react-router-dom";

export const COURSE_QUERY = gql`
query GetCourseByName($where: CourseWhere) {
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
    const params = useParams();
    const { loading, error, data } = useQuery(COURSE_QUERY, {
        variables: {
            where: {
                name: params.courseName
            }
        },
        fetchPolicy: "network-only"
    });

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.courses?.map((course) => (
                    <CourseDetail key={course.name} course={course} />
                ))}
            </QueryResult>
        </Layout>
    )
}

export default CoursePage