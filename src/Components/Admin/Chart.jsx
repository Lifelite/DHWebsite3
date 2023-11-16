import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer} from 'recharts';
import ChartTitle from "./ChartTitle";




function createChartData(ssData) {
    // const chartData = []
    const thisDate = new Date()
    const offset = thisDate.getTimezoneOffset()
    const adjust = new Date(thisDate.getTime() - (offset * 60 * 1000))
    const today = adjust.toISOString().split('T')[0]

    const sdata = (ssData) => {
        let chartData = []
        for (let baseDate = new Date('2023-11-12'); baseDate <= new Date(today); baseDate.setDate(baseDate.getDate() + 1)) {
            let bFDate = baseDate.toISOString().slice(0,10)
            let fDate = ssData.filter((date) => date === bFDate);
            let count = fDate.length
            chartData.push({bFDate, count})
        }

        return chartData;
    };
    return sdata(ssData)
}

function createData(date,value) {
    return {date, value}
}


export default function Chart(props) {
    let dates = props.ssData
    let data = []
    const theme = useTheme();
    const fdates = createChartData(dates)
    for (let i in fdates) {
        data.push(
            createData(fdates[i]["bFDate"], fdates[i]["count"])

        )
    }

    return (
        <React.Fragment>
            <ChartTitle>Sign ups</ChartTitle>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="date"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Sign Ups
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={false}
                        type="monotone"
                        dataKey="value"
                        stroke={theme.palette.primary.main}
                        dot={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}