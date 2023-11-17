import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Fulfillment from "./Fulfillment";
import SantaTable from "./SantaTable";
import Container from "@mui/material/Container";
import * as React from "react";



export function DashboardView(props) {
    const data = props.data
    const dates = props.dates

    function showView() {
        if (props.dates) {
            return <Chart ssData={dates}/>
        }
    }
    function showTable() {
        if (props.data) {
            return <SantaTable data={data}/>
        }
    }
    function showMetrics() {
        if (props.data) {
            return <Fulfillment data={data}/>
        }
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        {showView()}
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 0,
                            display: 'inline-flex',
                            flexDirection: 'row',
                            height: 240,
                        }}
                    >

                        {showMetrics()}
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        {showTable()}
                    </Paper>
                </Grid>
            </Grid>
        </Container></React.Fragment>
    )
}