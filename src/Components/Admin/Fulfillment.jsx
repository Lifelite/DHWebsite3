import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Fulfillment() {

    const data = [
        { id: 0, value: 0, label: 'Shipped' },
        { id: 1, value: 0, label: 'Fulfilled' },
        { id: 2, value: 0, label: 'Pending'}
    ]
    return (
        <PieChart
            series={[
                {
                    data,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
            ]}
            height={200}
        />
    );
}