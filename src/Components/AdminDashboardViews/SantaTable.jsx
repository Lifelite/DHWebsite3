import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function SantaTable(props) {
    const allData = props.data
    const ssData = allData["rows"]
    console.log(ssData)
    const ssHeaders = allData["headers"]
    let hArray = []
    for (let i in ssHeaders) {
        hArray.push({
            field: ssHeaders[i],
            key: ssHeaders[i],
            headerName: ssHeaders[i],
            width: 150
        })
    }
    const data = {columns:hArray, rows:ssData}

    const columns = data.columns

    return (
        <Box sx={{ height: 400, width: 1 }}>
            <DataGrid
                {...data}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    );
}