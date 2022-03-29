import * as React from 'react';
import TextField from '@mui/material/TextField';
import countryList from 'react-select-country-list';
import { MenuItem } from '@mui/material';

function CountrySelector() {
    const [country, setCountry] = React.useState('');
    const countryOptions = React.useMemo(() => countryList().getData(), [])

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <TextField
            required
            select
            value={country}
            onChange={handleChange}
            fullWidth
            id="country"
            name="country"
            label="What country are you currently living in?"
        >
            {countryOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default CountrySelector