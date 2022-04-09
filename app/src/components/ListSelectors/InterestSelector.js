import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import QueryResult from '../../containers/QueryResult'

const COURSE_QUERY = gql`
query Interests {
  interests {
    name
    id
  }
}
`;

const InterestSelector = props => {

    const { loading, error, data } = useQuery(COURSE_QUERY);
    const [interest, setInterest] = React.useState('');

    const handleChange = (event) => {
        setInterest(event.target.value);
    };

    React.useEffect(() => props.onChange(interest), [interest]);

    return (
        <QueryResult error={error} loading={loading} data={data}>
            <TextField
                required
                select
                value={interest}
                onChange={handleChange}
                fullWidth
                id="interest"
                name="interest"
                label="Interests and Hobbies"
            >
                {data?.interests?.map((interest) => (
                    <MenuItem key={interest.id} value={interest.name}>
                        {interest.name}
                    </MenuItem>
                ))}
            </TextField>
        </QueryResult>
    )
}

export default InterestSelector