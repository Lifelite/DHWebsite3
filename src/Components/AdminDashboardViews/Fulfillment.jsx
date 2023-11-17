import * as React from 'react';
import {BarChart} from '@mui/x-charts/BarChart';

export default function Fulfillment(props) {
    const data = props.data
    const rows = data["rows"]
    let participantCount = data["rows"].length
    let fulfillmentCount = 0
    let sentCount = 0
    for (let i in rows) {
        if (rows[i]["received"]) {
            sentCount += 1;
        }
        if (rows[i]["sent"]) {
            fulfillmentCount += 1;
        }
    }

    const uData = [participantCount, sentCount, fulfillmentCount]
    const xLabels = ['Participants', 'Sent', 'Received']

    return (

        <BarChart
            width={270}
            height={250}
            series={[
                { data: uData, label: `Amount so far...`, id: 'pvId' },

            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />

    );
}