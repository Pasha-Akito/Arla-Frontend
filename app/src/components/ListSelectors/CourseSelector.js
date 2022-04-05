import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../../containers/QueryResult'

const COURSE_QUERY = gql`
query Courses {
  courses {
    name
    id
  }
}
`;

function CourseSelector() {


    const { loading, error, data } = useQuery(COURSE_QUERY);

    const [course, setCourse] = React.useState('');

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    return (
        <QueryResult error={error} loading={loading} data={data}>
            <TextField
                required
                select
                value={course}
                onChange={handleChange}
                fullWidth
                id="course"
                name="course"
                label="Graduated Course"
            >
                {data?.courses?.map((course) => (
                    <MenuItem key={course.id} value={course.id}>
                        {course.name}
                    </MenuItem>
                ))}
            </TextField>
        </QueryResult>
    )
}

export default CourseSelector