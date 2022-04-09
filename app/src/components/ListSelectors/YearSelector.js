import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const YearSelector = props => {
    const [date, setDate] = React.useState(new Date());

    const handleChange = (date) => {
        setDate(date)
    }

    React.useEffect(() => props.onChange(date.getFullYear()), [date]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                views={['year']}
                label="Year Graduated"
                value={date}
                minDate={new Date('1970-01-01')}
                maxDate={new Date()}
                onChange={handleChange}
                renderInput={(params) => <TextField 
                    id="year"
                    name="year"
                    {...params}
                    helperText={null} />}
            />
        </LocalizationProvider>
    )
}

export default YearSelector