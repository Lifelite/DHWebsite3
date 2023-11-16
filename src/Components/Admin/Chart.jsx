import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer} from 'recharts';
import ChartTitle from "./ChartTitle";
import {AdminControls} from '../../api/MySQL/adminControls'


const ac = new AdminControls
const ssdata = ac.getDateData()

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

const data = createChartData(ssdata)

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <ChartTitle>Sign ups</ChartTitle>
            <ResponsiveContainer>
                <LineChart
                    data={() => createChartData(data)}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="time"
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
                        dataKey="amount"
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}