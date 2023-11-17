import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function ChartTitle(props) {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
}

ChartTitle.propTypes = {
    children: PropTypes.node,
};

export default ChartTitle;