import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from "@mui/material/Typography";

export default function Fulfillment() {

    const data = [
        { id: 0, value: 0, label: 'Shipped' },
        { id: 1, value: 0, label: 'Fulfilled' },
        { id: 2, value: 0, label: 'Pending'}
    ]
    return (
        // <PieChart
        //     series={[
        //         {
        //             startAngle: -90,
        //             endAngle: 90,
        //             data,
        //         },
        //     ]}
        //     height={300}
        // />
        <Typography>
            Coming soon, fulfillment metrics!
        </Typography>
    );
}